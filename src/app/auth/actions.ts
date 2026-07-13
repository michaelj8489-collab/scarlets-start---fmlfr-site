'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
// import { createClient as createAdminClient } from '@supabase/supabase-js'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const identifier = formData.get('identifier') as string // can be username or email for now
  const password = formData.get('password') as string
  
  if (!identifier || !password) {
    redirect('/login?message=Username/Email and Password are required.')
  }

  // NOTE: Supabase natively logs in with email or phone. 
  // To login purely by username, you'll need to lookup the user's email via their username using the Service Role Key.
  // For the sake of this setup before keys are added, we will assume 'identifier' is the email or the user has a custom RPC to handle username auth.
  // We'll pass the identifier as email here. Once the DB is set up, you can modify this to query the profiles table for the email first.
  
  const { error } = await supabase.auth.signInWithPassword({
    email: identifier, // Placeholder: user should provide email, or we need a lookup step here.
    password,
  })

  if (error) {
    redirect(`/login?message=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const username = formData.get('username') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const accountType = formData.get('accountType') as string
  const role = accountType === 'artist' ? 'artist' : 'listener'
  const signupPath = role === 'artist' ? '/signup/artist' : '/signup/listener'

  if (!email || !password || !username) {
    redirect(`${signupPath}?message=Username, Email, and Password are required.`)
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        role,
      }
    }
  })

  if (error) {
    redirect(`${signupPath}?message=${encodeURIComponent(error.message)}`)
  }

  redirect(`/signup/check-email?email=${encodeURIComponent(email)}`)
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}
