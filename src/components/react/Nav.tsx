import { useCallback, useEffect, useRef, useState } from "react"

type NavItem = {
    title: string
    sec: string
}

export default function Nav({ items }: { items: readonly NavItem[] }) {
    const [active, setActive] = useState<string>(items[0]?.sec ?? "")
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

    const listRef = useRef<HTMLDivElement>(null)
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
    const lastY = useRef(0)

    // Hide the bar while scrolling down, bring it back on the way up.
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY

            setScrolled(y > 24)
            setHidden(y > 160 && y > lastY.current)

            lastY.current = y
        }

        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Scroll spy. Whichever tracked section covers the most of the viewport wins,
    // which behaves correctly for both short and full-height sections.
    useEffect(() => {
        const ids = ["hero", ...items.map((i) => i.sec)]
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (sections.length === 0)
            return

        const ratios = new Map<string, number>()

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries)
                    ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)

                let best = ""
                let bestRatio = 0

                for (const [id, ratio] of ratios) {
                    if (ratio > bestRatio) {
                        best = id
                        bestRatio = ratio
                    }
                }

                if (best)
                    setActive(best)
            },
            {
                rootMargin: "-88px 0px -35% 0px",
                threshold: [0, 0.15, 0.3, 0.5, 0.75, 1]
            }
        )

        sections.forEach((s) => io.observe(s))

        return () => io.disconnect()
    }, [items])

    // Keep the sliding highlight underneath whichever link is active.
    const measure = useCallback(() => {
        const el = linkRefs.current[active]
        const list = listRef.current

        if (!el || !list) {
            setPill(null)

            return
        }

        setPill({
            left: el.offsetLeft,
            width: el.offsetWidth
        })
    }, [active])

    useEffect(() => {
        measure()

        window.addEventListener("resize", measure)

        return () => window.removeEventListener("resize", measure)
    }, [measure])

    const goto = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault()

        const sec = document.getElementById(id)

        if (!sec)
            return

        setActive(id)
        sec.scrollIntoView({ behavior: "smooth", block: "start" })
        history.replaceState(null, "", `#${id}`)
    }

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 transition-all duration-500 sm:pt-4 ${
                hidden ? "-translate-y-[140%] opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
            <nav
                aria-label="Section navigation"
                className={`max-w-[calc(100vw-1.5rem)] rounded-2xl border transition-all duration-300 ${
                    scrolled
                        ? "border-white/12 bg-ink-900/80 shadow-lg shadow-black/50 backdrop-blur-xl"
                        : "border-white/8 bg-ink-900/45 backdrop-blur-md"
                }`}
            >
                <div
                    ref={listRef}
                    className="relative flex items-center gap-1 overflow-x-auto p-1.5 [mask-image:linear-gradient(to_right,#000_0,#000_calc(100%-2rem),transparent_100%)] [scrollbar-width:none] sm:[mask-image:none] [&::-webkit-scrollbar]:hidden"
                >
                    {pill && (
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-linear-to-b from-brand-500/35 to-brand-600/25 ring-1 ring-brand-400/30 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{ left: pill.left, width: pill.width }}
                        />
                    )}

                    {items.map((item) => {
                        const isActive = active === item.sec

                        return (
                            <a
                                key={item.sec}
                                ref={(el) => {
                                    linkRefs.current[item.sec] = el
                                }}
                                href={`#${item.sec}`}
                                onClick={goto(item.sec)}
                                aria-current={isActive ? "true" : undefined}
                                className={`relative z-10 rounded-xl px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-200 sm:px-4 sm:text-sm ${
                                    isActive ? "text-white" : "text-white/55 hover:text-white/90"
                                }`}
                            >
                                {item.title}
                            </a>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}
