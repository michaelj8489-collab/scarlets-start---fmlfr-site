import { signup } from "@/app/auth/actions"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function ArtistSignupPage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) redirect("/dashboard")

  return (
    <main className="flex min-h-[calc(100svh-73px)] items-center justify-center bg-black px-4 py-10">
      <section className="w-full max-w-lg rounded-2xl border border-scarlet/30 bg-black/70 p-6 shadow-[0_0_40px_rgba(193,18,31,0.22)] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">Scarlet Artist</p>
        <h1 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-white">
          Artist Signup
        </h1>
        <p className="mt-4 text-sm leading-6 text-gray-400">
          Artist membership is for profile, promotion, and submission services. It does not guarantee radio play.
        </p>
        <form className="mt-7 flex flex-col gap-5">
          <input type="hidden" name="accountType" value="artist" />
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
            Artist Username
            <input name="username" type="text" required className="rounded-lg border border-scarlet/30 bg-black/60 p-4 text-base normal-case tracking-normal text-white outline-none focus:border-scarlet" />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
            Email
            <input name="email" type="email" required className="rounded-lg border border-scarlet/30 bg-black/60 p-4 text-base normal-case tracking-normal text-white outline-none focus:border-scarlet" />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
            Password
            <input name="password" type="password" required className="rounded-lg border border-scarlet/30 bg-black/60 p-4 text-base normal-case tracking-normal text-white outline-none focus:border-scarlet" />
          </label>
          {params.message && <p className="rounded border border-red-500/40 bg-red-950/35 p-3 text-sm text-red-200">{params.message}</p>}
          <button formAction={signup} className="rounded-lg bg-scarlet px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
            Create Artist Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Need the free path? <Link href="/signup/listener" className="text-scarlet hover:text-white">Join as listener</Link>
        </p>
      </section>
    </main>
  )
}
