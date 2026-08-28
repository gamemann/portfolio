import { useEffect, useState } from "react"

/**
 * Typewriter that cycles job titles. The first role is rendered server-side and
 * is what non-JS clients (and crawlers) see, so nothing here is load-bearing.
 */
export default function RoleRotator({
    roles,
    typeMs = 55,
    deleteMs = 26,
    holdMs = 1900,
    className = ""
}: {
    roles: string[]
    typeMs?: number
    deleteMs?: number
    holdMs?: number
    className?: string
}) {
    const [text, setText] = useState(roles[0] ?? "")

    useEffect(() => {
        if (roles.length < 2)
            return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return

        let index = 0
        let chars = roles[0].length
        let deleting = false
        let timer = 0

        const tick = () => {
            const word = roles[index]

            if (!deleting) {
                if (chars < word.length) {
                    chars++
                    setText(word.slice(0, chars))
                    timer = window.setTimeout(tick, typeMs)
                } else {
                    deleting = true
                    timer = window.setTimeout(tick, holdMs)
                }

                return
            }

            if (chars > 0) {
                chars--
                setText(word.slice(0, chars))
                timer = window.setTimeout(tick, deleteMs)

                return
            }

            deleting = false
            index = (index + 1) % roles.length
            timer = window.setTimeout(tick, typeMs)
        }

        timer = window.setTimeout(tick, holdMs)

        return () => window.clearTimeout(timer)
    }, [roles, typeMs, deleteMs, holdMs])

    return (
        <span className={className}>
            <span>{text}</span>
            <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent-300 [animation:caret-blink_1.1s_step-end_infinite]"
            />
        </span>
    )
}
