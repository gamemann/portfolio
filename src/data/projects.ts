export type Project = {
    title: string
    banner: string
    /** Small square logo shown beside the title. */
    icon?: string
    link: string
    sourceLink?: string
    openSource: boolean
    /** Whether I'm still actively working on it. */
    maintained: boolean
    category: string
    featured?: boolean
    role?: string
    tags: string[]
    summary: string
}

export const projects: Project[] = [
    {
        title: "TekWorks",
        banner: "/images/project/tekworks.png",
        link: "https://tekworks.net",
        sourceLink: "https://github.com/tek-works",
        openSource: true,
        maintained: true,
        category: "Technology",
        featured: true,
        role: "Founder",
        tags: ["Parent company", "Open source", "Networking"],
        summary:
            "An upcoming software developer and publisher, and the parent company the rest of my work sits under — The Modding Community operates as a project beneath it. Alongside publishing, TekWorks plans to build genuinely useful open source networking and automation tools."
    },
    {
        title: "The Modding Community",
        banner: "/images/project/tmc.png",
        link: "https://moddingcommunity.com",
        sourceLink: "https://github.com/modcommunity",
        openSource: true,
        maintained: true,
        category: "Gaming",
        featured: true,
        role: "Founder · Engineer",
        tags: ["Mod workshop", "Server browser", "Game dev assets"],
        summary:
            "A welcoming and inclusive modding and game development community, operating as a project under TekWorks. Game development assets, the mod workshop, and the server browser are all live and functional alongside the blog and forums — with more shipping continuously."
    },
    {
        title: "GameSpice",
        banner: "/images/games/gamespice-banner.png",
        icon: "/images/games/gamespice-icon.svg",
        link: "https://gamespice.net",
        sourceLink: "https://github.com/gamespice-platform",
        openSource: true,
        maintained: true,
        category: "Gaming platform",
        featured: true,
        role: "Creator",
        tags: ["Godot", "Open source", "Community servers"],
        summary:
            "An open source, cross-platform gaming platform for Godot games that puts community and game servers first. Play in your browser, join community servers, or publish your own game."
    },
    {
        title: "Zee's Games",
        banner: "/images/games/zees-games-banner.jpg",
        icon: "/images/games/zees-games-icon.svg",
        link: "https://zeesgames.com",
        sourceLink: "https://github.com/zees-games",
        openSource: true,
        maintained: true,
        category: "Games",
        featured: true,
        role: "Author",
        tags: ["Godot", "GDScript", "Multiplayer"],
        summary:
            "A collection of open source multiplayer games I'm making with Godot, all running on GameSpice: surf and bunny hop, shooters, a physics sandbox, minigames, and more."
    },
    {
        title: "XDP Firewall",
        banner: "/images/project/xdp-firewall.png",
        link: "https://github.com/gamemann/XDP-Firewall",
        sourceLink: "https://github.com/gamemann/XDP-Firewall",
        openSource: true,
        maintained: true,
        category: "Security",
        role: "Author",
        tags: ["C", "XDP/eBPF", "Linux kernel"],
        summary:
            "A stateless firewall built on the Linux kernel's XDP hook, where packets can be inspected and dropped before they ever reach the network stack. That makes it well suited to shedding malicious traffic during a (D)DoS attack at line rate."
    },
    {
        title: "Packet Batch",
        banner: "/images/project/packet-batch.png",
        link: "https://github.com/Packet-Batch",
        sourceLink: "https://github.com/Packet-Batch",
        openSource: true,
        maintained: true,
        category: "Security",
        role: "Author",
        tags: ["Rust", "C", "AF_XDP", "Pen testing"],
        summary:
            "A collection of high-performance tools for generating and sending network packets, used for two things: penetration testing — simulating attacks such as Denial of Service to assess network resilience — and network monitoring through traffic analysis and inspection."
    },
    {
        title: "Nightly",
        banner: "/images/games/nightly-banner.png",
        link: "https://github.com/gamemann/nightly",
        sourceLink: "https://github.com/gamemann/nightly",
        openSource: true,
        maintained: true,
        category: "Automation",
        role: "Author",
        tags: ["Claude Code", "Next.js", "TypeScript"],
        summary:
            "A database and web panel that autonomous Claude Code runs work from: a queue of tasks, schedules, run reports, and a live board where concurrent agents claim paths. It started as one cron line for GameSpice and grew from there."
    },
    {
        title: "Standout Servers",
        banner: "/images/games/standout-servers-banner.png",
        icon: "/images/games/standout-servers-icon.png",
        link: "https://standoutservers.com",
        openSource: false,
        maintained: true,
        category: "Gaming",
        tags: ["Server rankings", "Live data"],
        summary:
            "Live rankings of online game servers across the games tracked by The Modding Community, scored on population, uptime, and a transparent ranking formula."
    },
    {
        title: "Best Mods",
        banner: "/images/project/bestmods.png",
        link: "https://bestmods.org",
        sourceLink: "https://github.com/bestmods",
        openSource: true,
        maintained: false,
        category: "Gaming",
        role: "Creator",
        tags: ["Next.js", "TypeScript", "Postgres"],
        summary:
            "An open source index for game mods that pulls together sources from across the internet, so players can find what they're looking for in one place instead of a dozen."
    },
    {
        title: "Browser.TF",
        banner: "/images/project/browsertf.png",
        link: "https://btf.cdeacon.net",
        sourceLink: "https://github.com/gamemann/Browser.TF",
        openSource: true,
        maintained: false,
        category: "Gaming",
        role: "Creator",
        tags: ["Server browser", "TF2", "PHP"],
        summary:
            "A web-based server browser for Team Fortress 2 that I built in high school around 2015. The original browser.tf domain was fairly active before it was lost in mid-2022; it now lives on at btf.cdeacon.net."
    }
]
