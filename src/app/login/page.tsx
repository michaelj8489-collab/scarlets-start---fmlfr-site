import { login } from "@/app/auth/actions"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ message?: string; status?: string }> }) {
  const params = await searchParams
  const isSuccessMessage = params.status === "success"
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) redirect("/dashboard")

  return (
    <main className="relative flex min-h-[calc(100svh-73px)] items-center justify-center overflow-hidden bg-black px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.32),transparent_34%),linear-gradient(135deg,#050505,#120508_54%,#030303)]" />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-scarlet/30 bg-black/70 p-6 shadow-[0_0_40px_rgba(193,18,31,0.25)] backdrop-blur-md sm:p-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">Member Access</p>
          <h1 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-white">
            Enter Station
          </h1>
          <p className="mt-3 text-sm text-gray-400">Login to your Scarlet Star account.</p>
        </div>

        <form className="mt-8 flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
            Email
            <input
              name="identifier"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-lg border border-scarlet/30 bg-black/60 p-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-scarlet"
            />
          </label>

          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
            Password
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="rounded-lg border border-scarlet/30 bg-black/60 p-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-scarlet"
            />
          </label>

          {params.message && (
            <div className={`rounded border p-3 text-center text-sm ${isSuccessMessage ? "border-emerald-500/45 bg-emerald-950/25 text-emerald-100" : "border-red-500/50 bg-red-950/35 text-red-200"}`}>
              {params.message}
            </div>
          )}

          <button
            formAction={login}
            className="rounded-lg bg-scarlet px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(193,18,31,0.32)] transition hover:bg-red-800"
          >
            Login
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-scarlet transition hover:text-white">
            Register here
          </Link>
        </p>
      </div>
    </main>
  )
}
