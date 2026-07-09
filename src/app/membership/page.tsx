import Link from "next/link"

export default function MembershipPage() {
  return (
    <main className="min-h-[calc(100svh-73px)] bg-black px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
          Artist Membership
        </p>
        <h1 className="mt-4 font-serif text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
          Built for artist presentation
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300">
          Scarlet Artist Membership supports promotional services: a dedicated artist page, bio, media highlights, social links, design assets, submission access, and eligibility for curated feature opportunities.
        </p>
        <div className="mt-8 rounded-lg border border-scarlet/30 bg-scarlet/10 p-6">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-white">
            Important
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            Membership is not payment for radio plays. Scarlet Star staff curate station programming, and submitted performances may be considered for shows or rotation without any guarantee of airplay.
          </p>
        </div>
        <Link href="/signup/artist" className="mt-8 inline-flex rounded-lg bg-scarlet px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800">
          Become a Scarlet Artist
        </Link>
      </section>
    </main>
  )
}
