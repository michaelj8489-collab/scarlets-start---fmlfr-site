import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/login", label: "Login" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-scarlet/25 bg-[#050505]/90 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Scarlet Star Broadcasting logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-lg object-cover shadow-[0_0_18px_rgba(193,18,31,0.35)]"
          />
          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="font-serif text-lg font-bold uppercase leading-none tracking-[0.18em] text-white">
              Scarlet Star
            </span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-scarlet">
              Broadcasting
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-300 sm:gap-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-2 py-2 transition hover:text-white sm:px-0">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
