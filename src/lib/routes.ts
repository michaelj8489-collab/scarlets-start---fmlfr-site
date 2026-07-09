export const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/signup/listener",
  "/signup/artist",
  "/membership",
  "/terms",
  "/privacy",
  "/contact",
]

export const privateRoutePrefixes = [
  "/home",
  "/listen",
  "/artists",
  "/artist",
  "/shows",
  "/chat",
  "/submit",
  "/dashboard",
  "/admin",
  "/settings",
]

export const adminRoutePrefixes = ["/admin"]

export function isPrivateRoute(pathname: string) {
  return privateRoutePrefixes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
}

export function isAdminRoute(pathname: string) {
  return adminRoutePrefixes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
}
