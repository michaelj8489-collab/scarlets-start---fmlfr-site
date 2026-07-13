import Link from "next/link"

export default async function CheckEmailPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const params = await searchParams
  const email = params.email

  return (
    <main className="relative flex min-h-[calc(100svh-73px)] items-center justify-center overflow-hidden bg-black px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.3),transparent_34%),linear-gradient(135deg,#050505,#120508_54%,#030303)]" />
      <section className="relative z-10 w-full max-w-lg rounded-2xl border border-scarlet/30 bg-black/70 p-6 text-center shadow-[0_0_40px_rgba(193,18,31,0.24)] backdrop-blur-md sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
          Signup submitted
        </p>
        <h1 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-white">
          Check your email
        </h1>
        <p className="mt-5 text-sm leading-6 text-gray-300">
          Your Scarlet Star account request was sent successfully. Supabase should send a confirmation email{email ? ` to ${email}` : ""}.
        </p>
        <p className="mt-4 rounded-lg border border-emerald-500/35 bg-emerald-950/25 p-4 text-sm leading-6 text-emerald-100">
          Confirm your email before logging in. If you do not see it, check spam or promotions, then try signing up again after a few minutes.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link
            href="/login?status=success&message=Confirm%20your%20email%20before%20logging%20in."
            className="rounded-lg bg-scarlet px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800"
          >
            Go to Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg border border-scarlet/60 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-scarlet transition hover:bg-scarlet hover:text-white"
          >
            Back to Signup
          </Link>
        </div>
      </section>
    </main>
  )
}
