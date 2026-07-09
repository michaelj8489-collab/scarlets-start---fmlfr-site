import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { isAdminRoute, isPrivateRoute } from '@/lib/routes'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  if (!user && isPrivateRoute(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('message', 'Create a free listener account or login to enter Scarlet Star.')
    return NextResponse.redirect(url)
  }

  if (user && isAdminRoute(pathname)) {
    const role = user.user_metadata?.role
    if (role !== 'admin') {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard' // redirect unauthorized to dashboard
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
