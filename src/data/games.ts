/** Open source games I'm making — all part of Zee's Games, built on GameSpice. */
export type Game = {
    title: string
    /** Full https:// URL the game is played at. */
    link: string
    /** Public repository for the game. */
    sourceLink: string
    /** 1200x630 banner used as the card image. */
    banner: string
    /** Square icon shown beside the title. */
    icon: string
    genre: string
    summary: string
    /** Games with their own domain get the large card treatment. */
    featured?: boolean
    /** Two colours that tint the card's glow, and back the banner if it fails to load. */
    hues: [string, string]
}

/** The umbrella project and the platform every game below runs on. */
export const gamesMeta = {
    project: {
        name: "Zee's Games",
        link: "https://zeesgames.com",
        sourceLink: "https://github.com/zees-games",
        icon: "/images/games/zees-games-icon.svg"
    },
    platform: {
        name: "GameSpice",
        link: "https://gamespice.net",
        sourceLink: "https://github.com/gamespice-platform",
        icon: "/images/games/gamespice-icon.svg"
    }
} as const

const img = "/images/games"
const repo = "https://github.com/zees-games"
const zeesIcon = `${img}/zees-games-icon.svg`

export const games: Game[] = [
    {
        title: "Airdrift",
        link: "https://airdrift.net",
        sourceLink: `${repo}/game-airdrift`,
        banner: `${img}/airdrift-banner.png`,
        icon: `${img}/airdrift-icon.svg`,
        genre: "Surf · Bunny hop",
        featured: true,
        hues: ["#38bdf8", "#0e7490"],
        summary:
            "A timer-based game with Source-style movement. Includes classic Surf Timer and Bunny Hop maps from Counter-Strike's custom/modded maps!"
    },
    {
        title: "Fatal Contact",
        link: "https://fatalcontact.net",
        sourceLink: `${repo}/game-fatal-contact`,
        banner: `${img}/fatalcontact-banner.png`,
        icon: `${img}/fatalcontact-icon.svg`,
        genre: "Movement shooter",
        featured: true,
        hues: ["#f97316", "#b91c1c"],
        summary:
            "Fast-paced shooter with sprinting, sliding, wall running, bunny hopping, surfing, and more!"
    },
    {
        title: "Playlot",
        link: "https://playlot.app",
        sourceLink: `${repo}/game-playlot`,
        banner: `${img}/playlot-banner.png`,
        icon: `${img}/playlot-icon.svg`,
        genre: "Physics sandbox",
        featured: true,
        hues: ["#facc15", "#65a30d"],
        summary: "A physics sandbox: spawn props, NPCs and weapons and build whatever you like."
    },
    {
        title: "Prop Hunt",
        link: "https://prophunt.net",
        sourceLink: `${repo}/game-prop-hunt`,
        banner: `${img}/prophunt-banner.png`,
        icon: `${img}/prophunt-icon.svg`,
        genre: "Hide & seek",
        featured: true,
        hues: ["#f472b6", "#86198f"],
        summary: "Disguise as furniture and keep still while blindfolded hunters search."
    },
    {
        title: "Hungario",
        link: "https://zeesgames.com/hungario",
        sourceLink: `${repo}/game-hungario`,
        banner: `${img}/hungario-banner.jpg`,
        icon: zeesIcon,
        genre: "Arcade",
        hues: ["#a3e635", "#15803d"],
        summary: "Steer a hungry monster, eat to grow and outlast everyone else."
    },
    {
        title: "Buses From Hell",
        link: "https://zeesgames.com/buses-from-hell",
        sourceLink: `${repo}/mg-buses-from-hell`,
        banner: `${img}/buses-from-hell-banner.jpg`,
        icon: zeesIcon,
        genre: "Survival",
        hues: ["#fb923c", "#991b1b"],
        summary: "Survive one or more crazy bus drivers trying to run you over."
    },
    {
        title: "Smash Copter",
        link: "https://zeesgames.com/smash-copter",
        sourceLink: `${repo}/mg-smash-copter`,
        banner: `${img}/smash-copter-banner.jpg`,
        icon: zeesIcon,
        genre: "Survival",
        hues: ["#22d3ee", "#1d4ed8"],
        summary: "Stay on wobbly platforms while a cannon rains props down on you."
    },
    {
        title: "Zombie Zone",
        link: "https://zeesgames.com/zombie-zone",
        sourceLink: `${repo}/game-zombie-zone`,
        banner: `${img}/zombie-zone-banner.jpg`,
        icon: zeesIcon,
        genre: "Co-op survival",
        hues: ["#4ade80", "#3f6212"],
        summary:
            "Co-op zombie survival: escape through the city or survive waves. Open boxes with random effects on the game, others, and yourself!"
    },
    {
        title: "Hide n Seek",
        link: "https://zeesgames.com/hide-n-seek",
        sourceLink: `${repo}/game-hide-n-seek`,
        banner: `${img}/hide-n-seek-banner.jpg`,
        icon: zeesIcon,
        genre: "Hide & seek",
        hues: ["#c084fc", "#6d28d9"],
        summary: "Hide as yourself; every hider caught joins the hunt."
    },
    {
        title: "Murder Mystery",
        link: "https://zeesgames.com/murder-mystery",
        sourceLink: `${repo}/game-murder-mystery`,
        banner: `${img}/murder-mystery-banner.jpg`,
        icon: zeesIcon,
        genre: "Social deduction",
        hues: ["#f87171", "#7f1d1d"],
        summary: "Everybody looks the same. One of them has a knife."
    },
    {
        title: "Deathrun",
        link: "https://zeesgames.com/deathrun",
        sourceLink: `${repo}/game-deathrun`,
        banner: `${img}/deathrun-banner.jpg`,
        icon: zeesIcon,
        genre: "Trap course",
        hues: ["#fbbf24", "#b45309"],
        summary: "Run a trap-filled course while the activators press every button they have."
    },
    {
        title: "Wipeout",
        link: "https://zeesgames.com/wipeout",
        sourceLink: `${repo}/mg-wipeout`,
        banner: `${img}/wipeout-banner.jpg`,
        icon: zeesIcon,
        genre: "Obstacle course",
        hues: ["#f472b6", "#7e22ce"],
        summary: "Obstacle courses over water: sweeper arms, big balls and a fight at the finish."
    },
    {
        title: "Dangerous Delivery",
        link: "https://zeesgames.com/dangerous-delivery",
        sourceLink: `${repo}/mg-dangerous-delivery`,
        banner: `${img}/dangerous-delivery-banner.jpg`,
        icon: zeesIcon,
        genre: "Driving",
        hues: ["#fdba74", "#0f766e"],
        summary: "Haul loads up mountain roads with no guard rails. Riskier runs pay more."
    },
    {
        title: "Look At Me",
        link: "https://zeesgames.com/look-at-me",
        sourceLink: `${repo}/mg-look-at-me`,
        banner: `${img}/look-at-me-banner.jpg`,
        icon: zeesIcon,
        genre: "Horror",
        hues: ["#a78bfa", "#312e81"],
        summary: "A dark house, 32 levels deep, and the witches walking its rooms."
    }
]
