export const site = {
    name: "Christian Deacon",
    role: "DevOps Engineer",
    tagline: "Systems and network engineer with over a decade of experience in building infrastructure, high-performance networking tools, and web apps — nearly all of it in the open.",
    experience: "15+ Years Experience",
    url: "https://cdeacon.net",
    description:
        "Christian Deacon — DevOps engineer with 15+ years of experience in systems programming, high-performance networking, and full-stack web development.",
    sourceCode: "https://github.com/gamemann/portfolio"
} as const

/**
 * Base64 so the plain address never lands in the served HTML — the contact
 * button decodes it client-side on click, which most spam bots never do.
 * Override per-deployment with PUBLIC_EMAIL_ENCODE.
 */
export const emailEncoded = "Y2hyaXN0aWFubWRlYWNvbkBnbWFpbC5jb20="

export const socials = [
    {
        name: "GitHub",
        href: "https://github.com/gamemann",
        icon: "Github"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/christiandeacon/",
        icon: "Linkedin"
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@cdeaconado",
        icon: "Youtube"
    }
] as const

export const navItems = [
    { title: "About", sec: "about" },
    { title: "Skillset", sec: "skillset" },
    { title: "Stack", sec: "stack" },
    { title: "Projects", sec: "projects" },
    { title: "Guides", sec: "guides" },
    { title: "Contact", sec: "contact" }
] as const

export const stats = [
    { value: "15+", label: "Years building" },
    { value: "6", label: "Skill areas" },
    { value: "20+", label: "Technologies" },
    { value: "OSS", label: "By default" }
] as const

export const facts = [
    { label: "Focus", value: "DevOps · Systems · Networking" },
    { label: "Lately", value: "GDScript, Rust, XDP/eBPF, ClickHouse" },
    { label: "Writes", value: "Guides, docs, knowledge bases" },
    { label: "Status", value: "Not seeking work, but always open to connecting :)" }
] as const

export type TimelineEntry = {
    when: string
    title: string
    body: string
    /** Optional callout rendered as a small block beneath the entry body. */
    highlight?: string
    /** URL the highlight block links to. */
    highlightLink?: string
}

export const timeline: readonly TimelineEntry[] = [
    {
        when: "Age 11",
        title: "First lines of code",
        body: "Started out writing and editing existing game modifications for the game Left 4 Dead using SourcePawn (for SourceMod).",
        highlight: "My first project was a small mod for Left 4 Dead 2 servers built with SourceMod/SourcePawn.",
        highlightLink: "https://forums.alliedmods.net/showthread.php?p=1066227"
    },
    {
        when: "Age 13",
        title: "Founded a gaming community",
        body: "Ran dedicated game servers on Linux and Windows, and learned infrastructure and networking the hard way."
    },
    {
        when: "Since",
        title: "Shipping in the open",
        body: "Web apps, bots, networking tools, and automation — most of it open source and documented."
    },
    {
        when: "Now",
        title: "TekWorks & The Modding Community",
        body: "Building a software publisher and a modding community with a focus on open source and community-driven development. Also creating our own gaming platform underneath Godot!"
    }
]
