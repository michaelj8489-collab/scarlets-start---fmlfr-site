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
      <section className="relative min-h-[calc(100svh-73px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/Scarlet Star Broadcasting.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-24"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(193,18,31,0.38),transparent_28%),linear-gradient(110deg,#030303_0%,rgba(5,5,5,0.96)_38%,rgba(14,2,5,0.78)_66%,#030303_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-9rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl pt-8 text-left sm:pt-10 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-scarlet">
              Giving cover artists a stage
            </p>
            <h1 className="mt-5 font-serif text-4xl font-black uppercase leading-[0.92] tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">
              <span className="block whitespace-nowrap">Your voice.</span>
              <span className="block whitespace-nowrap">Your stage.</span>
              <span className="block whitespace-nowrap text-scarlet">Your spotlight.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Scarlet Star is a private music community and broadcasting platform built to help rising cover artists get heard, featured, and celebrated.
            </p>

            <div className="mt-9 grid gap-3 sm:max-w-3xl sm:grid-cols-3">
              <Link
                href="/signup/listener"
                className="rounded-lg bg-scarlet px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_22px_rgba(193,18,31,0.38)] transition hover:bg-red-800"
              >
                Join Free
              </Link>
              <Link
                href="/signup/artist"
                className="rounded-lg border border-scarlet/70 bg-black/45 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-scarlet transition hover:bg-scarlet hover:text-white"
              >
                Become an Artist
              </Link>
              <Link
                href="/login"
                className="rounded-lg border border-white/15 bg-white/[0.04] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-white/40"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl flex-col items-center justify-center lg:items-end">
            <div className="absolute inset-8 rounded-full bg-scarlet/20 blur-3xl" />
            <div className="relative w-full rounded-lg border border-scarlet/25 bg-black/50 p-5 shadow-[0_0_60px_rgba(193,18,31,0.18)] backdrop-blur-md sm:p-7">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/logo.png"
                  alt="Scarlet Star Broadcasting"
                  width={176}
                  height={176}
                  priority
                  className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-[0_0_44px_rgba(193,18,31,0.42)] sm:h-40 sm:w-40"
                />
                <div>
                  <p className="font-serif text-2xl font-black uppercase leading-none tracking-[0.14em] text-white sm:text-4xl">
                    Scarlet Star
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.34em] text-scarlet">
                    Broadcasting
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-300">
                  Private platform preview
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Live shows, listening rooms, artists, and song drops open after signup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-scarlet/20 bg-[#070707] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
              Inside the door
            </p>
            <h2 className="mt-4 font-serif text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-4xl">
              A teaser-first music platform.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {teaserCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <h3 className="font-serif text-xl font-bold uppercase tracking-[0.12em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-400">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
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
