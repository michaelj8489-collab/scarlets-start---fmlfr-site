"use client"

import { useEffect, useMemo, useState } from "react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

function isIosDevice() {
  if (typeof window === "undefined") return false
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

function isStandalone() {
  if (typeof window === "undefined") return false
  const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean }
  return window.matchMedia("(display-mode: standalone)").matches || Boolean(navigatorWithStandalone.standalone)
}

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [showIosTip] = useState(() => isIosDevice() && !isStandalone())

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined)
    }

    const handler = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const shouldShow = useMemo(
    () => !dismissed && (installEvent || showIosTip),
    [dismissed, installEvent, showIosTip]
  )

  if (!shouldShow) return null

  async function installApp() {
    if (!installEvent) return
    await installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
    setDismissed(true)
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-lg border border-scarlet/35 bg-black/90 p-4 text-white shadow-[0_0_30px_rgba(193,18,31,0.22)] backdrop-blur-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-scarlet">
            Install Scarlet Star
          </p>
          <p className="mt-2 text-sm leading-5 text-gray-300">
            {showIosTip
              ? "On iPhone, use Share, then Add to Home Screen for an app-style launch."
              : "Add Scarlet Star to your device for a standalone, mobile-first experience."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="rounded-full px-2 text-xl leading-none text-gray-400 hover:text-white"
          aria-label="Dismiss install prompt"
        >
          x
        </button>
      </div>
      {installEvent && (
        <button
          type="button"
          onClick={installApp}
          className="mt-4 w-full rounded-lg bg-scarlet px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-800"
        >
          Install App
        </button>
      )}
    </div>
  )
}
