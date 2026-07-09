import Link from "next/link"

type BrandedShellProps = {
  eyebrow?: string
  title: string
  description: string
  children?: React.ReactNode
}

export function BrandedShell({ eyebrow, title, description, children }: BrandedShellProps) {
  return (
    <main className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-black px-4 py-10 sm:px-6 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.28),transparent_34%),linear-gradient(135deg,#050505,#120508_54%,#030303)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />

      <section className="relative z-10 mx-auto flex min-h-[60svh] w-full max-w-5xl flex-col justify-center">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-scarlet">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            {description}
          </p>
        </div>

        {children ?? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-scarlet/25 bg-black/55 p-5 shadow-[0_0_26px_rgba(193,18,31,0.12)]">
              <h2 className="font-serif text-xl font-bold uppercase tracking-[0.1em] text-white">
                Coming Soon
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                This private Scarlet Star section is part of the Phase 1 MVP shell and is ready for the next feature pass.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <h2 className="font-serif text-xl font-bold uppercase tracking-[0.1em] text-white">
                Member Access
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Routes in this area require an authenticated Scarlet Star account.
              </p>
            </div>
          </div>
        )}

        <Link
          href="/dashboard"
          className="mt-8 inline-flex w-fit rounded-lg border border-scarlet/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-scarlet transition hover:bg-scarlet hover:text-white"
        >
          Back to Dashboard
        </Link>
      </section>
    </main>
  )
}
