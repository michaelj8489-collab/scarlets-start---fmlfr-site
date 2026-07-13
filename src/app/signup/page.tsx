import Link from "next/link"

const signupOptions = [
  {
    href: "/signup/listener",
    title: "Join Free as Listener",
    body: "Create a free account to enter the private Scarlet Star experience, listen, and discover rising cover artists.",
    cta: "Enter as Listener",
  },
  {
    href: "/signup/artist",
    title: "Become a Scarlet Artist",
    body: "Start the artist path for profile services, media highlights, social links, and feature eligibility.",
    cta: "Artist Signup",
  },
]

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams

  return (
    <main className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-black px-4 py-12 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.3),transparent_34%),linear-gradient(135deg,#050505,#110509_56%,#030303)]" />
      <section className="relative z-10 mx-auto flex min-h-[60svh] max-w-5xl flex-col justify-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
          Choose your path
        </p>
        <h1 className="mt-4 font-serif text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
          Enter Scarlet Star
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
          Start with the role that fits you today. The full music community opens after account creation.
        </p>
        {params.message && (
          <p className="mt-5 max-w-2xl rounded border border-red-500/40 bg-red-950/35 p-3 text-sm text-red-200">
            {params.message}
          </p>
        )}

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {signupOptions.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="rounded-lg border border-scarlet/25 bg-black/55 p-6 transition hover:border-scarlet/65 hover:bg-scarlet/10"
            >
              <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-white">
                {option.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-400">{option.body}</p>
              <span className="mt-6 inline-flex rounded-lg bg-scarlet px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
                {option.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
