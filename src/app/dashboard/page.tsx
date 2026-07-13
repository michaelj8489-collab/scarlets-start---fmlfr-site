import { logout } from "@/app/auth/actions"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

const dashboardLinks = [
  { href: "/home", title: "Member Home", body: "Enter the private Scarlet Star member experience." },
  { href: "/listen", title: "Listen Live", body: "Open the locked station player foundation." },
  { href: "/artists", title: "Artists", body: "Preview the private artist discovery shell." },
  { href: "/submit", title: "Submit Music", body: "Prepare for StarMaker song submissions with consent." },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/login")

  const username = user.user_metadata?.username || user.email?.split("@")[0] || "User"
  const isAdmin = user.user_metadata?.role === "admin"
  const visibleDashboardLinks = [
    ...dashboardLinks,
    ...(isAdmin
      ? [{ href: "/admin", title: "Admin Dashboard", body: "Access admin tools, including the StarMaker scraper." }]
      : []),
  ]

  return (
    <main className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-black px-4 py-10 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.26),transparent_34%),linear-gradient(135deg,#050505,#120508_54%,#030303)]" />
      <section className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col gap-5 border-b border-scarlet/20 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">Dashboard</p>
            <h1 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl">
              Welcome, <span className="text-scarlet">{username}</span>
            </h1>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Your Phase 1 Scarlet Star member shell is ready.
            </p>
          </div>
          <form action={logout}>
            <button className="rounded-lg border border-scarlet px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-scarlet transition hover:bg-scarlet hover:text-white">
              Log Out
            </button>
          </form>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {visibleDashboardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-scarlet/20 bg-black/55 p-6 transition hover:border-scarlet/55 hover:bg-scarlet/10"
            >
              <h2 className="font-serif text-xl font-bold uppercase tracking-[0.1em] text-white">
                {link.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">{link.body}</p>
              <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-scarlet">
                Open -&gt;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
