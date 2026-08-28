import { useEffect, useMemo, useRef, useState } from "react"

import type { StackGroup, StackItem } from "../../data/stack"

type Tier = {
    label: string
    dot: string
    text: string
    ring: string
    bar: string
}

const TIERS: Tier[] = [
    {
        label: "Very Experienced",
        dot: "bg-accent-400",
        text: "text-accent-300",
        ring: "ring-accent-400/45",
        bar: "from-accent-400 to-accent-300"
    },
    {
        label: "Experienced",
        dot: "bg-brand-400",
        text: "text-brand-300",
        ring: "ring-brand-400/40",
        bar: "from-brand-500 to-brand-400"
    },
    {
        label: "Familiar",
        dot: "bg-white/40",
        text: "text-white/50",
        ring: "ring-white/15",
        bar: "from-white/35 to-white/20"
    }
]

function tierOf(level: number): Tier {
    if (level >= 8)
        return TIERS[0]

    if (level >= 4)
        return TIERS[1]

    return TIERS[2]
}

/** Design-space size of the orbit; the whole thing is scaled to fit its column. */
const ORBIT_BOX = 760
const RINGS = [
    { radius: 128, count: 5, duration: 46, reverse: false },
    { radius: 232, count: 7, duration: 62, reverse: true },
    { radius: 336, count: 8, duration: 82, reverse: false }
]

export default function Stack({
    items,
    groups
}: {
    items: StackItem[]
    groups: StackGroup[]
}) {
    const [view, setView] = useState<"orbit" | "grid">("orbit")
    // Server-rendered markup has no handlers attached yet; flipping this on
    // mount stops the toggle from looking clickable while it still isn't.
    const [ready, setReady] = useState(false)
    const [hovered, setHovered] = useState<StackItem | null>(null)
    // Rotating icons are a moving target: freeze the whole orbit as soon as the
    // pointer is anywhere over it so items can actually be aimed at.
    const [frozen, setFrozen] = useState(false)
    const [narrow, setNarrow] = useState(false)
    const [scale, setScale] = useState(1)
    // Twenty-odd icons each carrying an infinite rotation is real per-frame work,
    // and CSS animations keep running whether or not the section is on screen.
    const [onScreen, setOnScreen] = useState(true)

    const wrapRef = useRef<HTMLDivElement>(null)

    useEffect(() => setReady(true), [])

    // The orbit needs real horizontal room, so drop to the grid on small screens.
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)")
        const apply = () => setNarrow(mq.matches)

        apply()
        mq.addEventListener("change", apply)

        return () => mq.removeEventListener("change", apply)
    }, [])

    // Scale the fixed-size orbit down to whatever width the column actually has.
    useEffect(() => {
        const el = wrapRef.current

        if (!el)
            return

        const ro = new ResizeObserver(([entry]) => {
            const w = entry.contentRect.width

            setScale(Math.min(1, w / ORBIT_BOX))
        })

        ro.observe(el)

        return () => ro.disconnect()
    }, [view, narrow])

    // Park the orbit whenever it scrolls out of the viewport.
    useEffect(() => {
        const el = wrapRef.current

        if (!el)
            return

        const io = new IntersectionObserver(
            ([entry]) => setOnScreen(entry.isIntersecting),
            { rootMargin: "200px 0px" }
        )

        io.observe(el)

        return () => io.disconnect()
    }, [view, narrow])

    const ranked = useMemo(
        () => [...items].sort((a, b) => b.expLevel - a.expLevel || a.title.localeCompare(b.title)),
        [items]
    )

    // Fill rings from the middle outwards, so the strongest sit closest to centre.
    const rings = useMemo(() => {
        const out: StackItem[][] = []
        let cursor = 0

        for (const ring of RINGS) {
            out.push(ranked.slice(cursor, cursor + ring.count))
            cursor += ring.count
        }

        // Anything left over (data added later) joins the outermost ring.
        if (cursor < ranked.length)
            out[out.length - 1].push(...ranked.slice(cursor))

        return out
    }, [ranked])

    const showOrbit = view === "orbit" && !narrow
    const spin = onScreen && !frozen && !hovered ? "running" : "paused"

    return (
        <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {TIERS.map((t) => (
                        <span key={t.label} className="flex items-center gap-2 text-xs text-white/55">
                            <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                            {t.label}
                        </span>
                    ))}
                </div>

                <div
                    role="group"
                    aria-label="Stack display mode"
                    className={`flex rounded-xl border border-white/10 bg-white/4 p-1 ${narrow ? "hidden" : ""}`}
                >
                    {(["orbit", "grid"] as const).map((mode) => (
                        <button
                            key={mode}
                            type="button"
                            onClick={() => {
                                setView(mode)
                                setHovered(null)
                                setFrozen(false)
                            }}
                            aria-pressed={view === mode}
                            disabled={!ready}
                            className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold capitalize transition duration-200 disabled:cursor-progress disabled:opacity-50 ${
                                view === mode
                                    ? "bg-brand-600/60 text-white shadow-sm shadow-brand-900/40"
                                    : "text-white/50 not-disabled:hover:text-white/85"
                            }`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>
            </div>

            {showOrbit ? (
                <div ref={wrapRef} className="flex justify-center">
                    <div
                        className="relative"
                        style={{
                            width: ORBIT_BOX * scale,
                            height: ORBIT_BOX * scale
                        }}
                        onMouseEnter={() => setFrozen(true)}
                        onMouseLeave={() => {
                            setHovered(null)
                            setFrozen(false)
                        }}
                    >
                        <div
                            className="absolute top-0 left-0 origin-top-left"
                            style={{
                                width: ORBIT_BOX,
                                height: ORBIT_BOX,
                                transform: `scale(${scale})`
                            }}
                        >
                            {/* Ring guides */}
                            {RINGS.map((ring) => (
                                <div
                                    key={`guide-${ring.radius}`}
                                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
                                    style={{ width: ring.radius * 2, height: ring.radius * 2 }}
                                />
                            ))}

                            {/* Centre readout */}
                            <div className="pointer-events-none absolute top-1/2 left-1/2 z-30 w-44 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="aurora absolute inset-0 -z-10" style={{ "--aurora-tint": "rgba(108,99,255,0.16)" } as React.CSSProperties} />
                                {hovered ? (
                                    <>
                                        <p className="font-display text-xl font-extrabold text-white">
                                            {hovered.title}
                                        </p>
                                        <p className={`mt-1 text-xs font-medium ${tierOf(hovered.expLevel).text}`}>
                                            {tierOf(hovered.expLevel).label}
                                        </p>
                                        <p className="mt-0.5 font-mono text-[11px] text-white/35">
                                            {hovered.group}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="font-display text-3xl font-extrabold text-white">
                                            {items.length}
                                        </p>
                                        <p className="mt-1 text-xs text-white/45">technologies</p>
                                        <p className="mt-2 font-mono text-[10px] tracking-widest text-white/25 uppercase">
                                            hover to inspect
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Orbits */}
                            {RINGS.map((ring, ri) => {
                                const members = rings[ri] ?? []

                                if (members.length === 0)
                                    return null

                                return (
                                    <div
                                        key={`ring-${ri}`}
                                        className="pointer-events-none absolute inset-0"
                                        style={{
                                            animation: `${ring.reverse ? "orbit-counter" : "orbit-spin"} ${ring.duration}s linear infinite`,
                                            animationPlayState: spin
                                        }}
                                    >
                                        {members.map((item, i) => {
                                            const angle = (360 / members.length) * i
                                            const tier = tierOf(item.expLevel)
                                            const isHovered = hovered?.title === item.title

                                            return (
                                                <div
                                                    key={item.title}
                                                    className="absolute top-1/2 left-1/2 h-16 w-16"
                                                    style={{
                                                        transform: `rotate(${angle}deg) translate(${ring.radius}px) rotate(${-angle}deg) translate(-50%, -50%)`
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        onMouseEnter={() => setHovered(item)}
                                                        onMouseLeave={() => setHovered(null)}
                                                        onFocus={() => setHovered(item)}
                                                        onBlur={() => setHovered(null)}
                                                        aria-label={`${item.title} — ${tier.label}`}
                                                        className={`pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-ink-800/95 ring-1 transition duration-300 ${tier.ring} ${
                                                            isHovered
                                                                ? "z-20 scale-125 border-white/25 bg-ink-700 shadow-xl shadow-black/60"
                                                                : "hover:scale-110"
                                                        }`}
                                                        style={{
                                                            animation: `${ring.reverse ? "orbit-spin" : "orbit-counter"} ${ring.duration}s linear infinite`,
                                                            animationPlayState: spin
                                                        }}
                                                    >
                                                        <img
                                                            src={item.icon}
                                                            alt=""
                                                            width={36}
                                                            height={36}
                                                            className="h-9 w-9 opacity-85"
                                                        />
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <div ref={wrapRef} className="flex flex-col gap-10">
                    {groups.map((group) => {
                        const members = items
                            .filter((i) => i.group === group)
                            .sort((a, b) => b.expLevel - a.expLevel)

                        if (members.length === 0)
                            return null

                        return (
                            <div key={group}>
                                <h3 className="mb-4 font-mono text-xs tracking-[0.22em] text-white/35 uppercase">
                                    {group}
                                </h3>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                    {members.map((item) => {
                                        const tier = tierOf(item.expLevel)

                                        return (
                                            <div
                                                key={item.title}
                                                className="group rounded-2xl border border-white/8 bg-white/3 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/6"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.icon}
                                                        alt=""
                                                        width={28}
                                                        height={28}
                                                        className="h-7 w-7 shrink-0 opacity-80 transition group-hover:opacity-100"
                                                    />
                                                    <p className="truncate text-sm font-semibold text-white">
                                                        {item.title}
                                                    </p>
                                                </div>

                                                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                                                    <div
                                                        className={`h-full rounded-full bg-linear-to-r ${tier.bar}`}
                                                        style={{ width: `${item.expLevel * 10}%` }}
                                                    />
                                                </div>
                                                <p className={`mt-2 text-[11px] ${tier.text}`}>{tier.label}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
