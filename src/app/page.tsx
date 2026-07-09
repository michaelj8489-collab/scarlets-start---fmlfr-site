import Image from "next/image"
import Link from "next/link"

const teaserCards = [
  {
    title: "Private Music Community",
    body: "Listeners enter a member space built around live shows, rising voices, and curated cover artist discovery.",
  },
  {
    title: "Artist Spotlight Tools",
    body: "Scarlet Artists can prepare for dedicated pages, media links, social presence, and feature eligibility.",
  },
  {
    title: "Broadcasting Foundation",
    body: "The station shell is ready for locked listening, show pages, submissions, and admin review workflows.",
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
      <section className="relative min-h-[calc(100svh-73px)] px-4 py-12 sm:px-6">
        <div className="absolute inset-0">
          <Image
            src="/images/Scarlet Star Broadcasting.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.34),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.58),#050505_78%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-6xl flex-col items-center justify-center text-center">
          <Image
            src="/images/logo.png"
            alt="Scarlet Star Broadcasting"
            width={168}
            height={168}
            priority
            className="h-32 w-32 rounded-2xl object-cover shadow-[0_0_44px_rgba(193,18,31,0.42)] sm:h-40 sm:w-40"
          />

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.34em] text-scarlet">
            Giving cover artists a stage
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black uppercase leading-tight tracking-[0.08em] text-white sm:text-6xl">
            Your voice. Your stage. Your spotlight.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Scarlet Star is a private music community and broadcasting platform built to help rising cover artists get heard, featured, and celebrated.
          </p>

          <div className="mt-9 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
            <Link
              href="/signup/listener"
              className="rounded-lg bg-scarlet px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_22px_rgba(193,18,31,0.38)] transition hover:bg-red-800"
            >
              Join Free
            </Link>
            <Link
              href="/signup/artist"
              className="rounded-lg border border-scarlet/70 bg-black/45 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-scarlet transition hover:bg-scarlet hover:text-white"
            >
              Become an Artist
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-white/40"
            >
              Login
            </Link>
          </div>

          <p className="mt-6 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            Live shows, listening rooms, artists, and song drops open after signup.
          </p>
        </div>
      </section>

      <section className="border-y border-scarlet/20 bg-[#070707] px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {teaserCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="font-serif text-xl font-bold uppercase tracking-[0.12em] text-white">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-400">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
              Scarlet Artist Membership
            </p>
            <h2 className="mt-4 font-serif text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-4xl">
              Promotion services, not paid airplay.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-300">
              Membership is designed around a professional artist page, profile presentation, social links, media highlights, promotional assets, submission access, and eligibility for curated feature opportunities.
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Station programming is curated by Scarlet Star staff. Submissions may be considered for live shows or rotation, but membership never guarantees radio plays.
            </p>
          </div>
          <div className="rounded-lg border border-scarlet/30 bg-scarlet/10 p-6 shadow-[0_0_30px_rgba(193,18,31,0.12)]">
            <h3 className="font-serif text-2xl font-bold uppercase tracking-[0.12em] text-white">
              Inside Scarlet Star
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-300">
              <li>Locked live listening and member home</li>
              <li>Artist, show, chat, and submission foundations</li>
              <li>Admin-only review dashboard foundation</li>
              <li>PWA-ready mobile app experience</li>
            </ul>
            <Link
              href="/membership"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-gray-200"
            >
              View Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
