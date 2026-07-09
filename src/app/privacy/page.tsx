export default function PrivacyPage() {
  return (
    <main className="min-h-[calc(100svh-73px)] bg-black px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-scarlet">Privacy</p>
        <h1 className="mt-4 font-serif text-4xl font-black uppercase tracking-[0.08em] text-white">
          Privacy Policy
        </h1>
        <p className="mt-5 text-base leading-7 text-gray-300">
          Scarlet Star Broadcasting is preparing its full Privacy Policy. The MVP uses Supabase authentication and stores account details needed to provide member access.
        </p>
        <p className="mt-4 text-sm leading-6 text-gray-500">
          Secrets and service role keys must never be exposed to the browser or committed to the repository.
        </p>
      </section>
    </main>
  )
}
