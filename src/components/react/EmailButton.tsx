import { useState } from "react"

/**
 * The address is shipped Base64-encoded and only decoded on click, so the plain
 * text never appears in the served HTML and stays away from the scrapers that
 * never run JS. Clicking hands the decoded address straight to the mail client
 * and leaves it on screen in case no client is registered.
 */
export default function EmailButton({ email64 }: { email64: string }) {
    const [email, setEmail] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)
    const [failed, setFailed] = useState(false)

    const open = () => {
        let decoded: string

        try {
            decoded = atob(email64)
        } catch (err) {
            console.error(`Failed to decode email: ${err}`)
            setFailed(true)

            return
        }

        setEmail(decoded)
        setFailed(false)

        window.location.href = `mailto:${decoded}`
    }

    const copy = async () => {
        if (!email)
            return

        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1800)
        } catch {
            /* Clipboard is unavailable — the address is on screen either way. */
        }
    }

    if (failed) {
        return (
            <p className="rounded-xl border border-white/12 bg-white/4 px-5 py-3 text-sm text-white/60">
                Couldn't load the address — try GitHub or LinkedIn below.
            </p>
        )
    }

    if (!email) {
        return (
            <button
                type="button"
                onClick={open}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/35"
            >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                </svg>
                Email me
            </button>
        )
    }

    return (
        <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-white/12 bg-white/5 p-1.5 pl-4 backdrop-blur">
            <a
                href={`mailto:${email}`}
                className="font-mono text-sm text-accent-300 transition hover:text-accent-400"
            >
                {email}
            </a>
            <button
                type="button"
                onClick={copy}
                className="cursor-pointer rounded-lg bg-white/8 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/15 hover:text-white"
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    )
}
