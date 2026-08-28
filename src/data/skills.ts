import CustomerServiceIcon from "../assets/skill/CustomerService.svg"
import GameDeveloperIcon from "../assets/skill/GameDeveloper.svg"
import NetworkEngineerIcon from "../assets/skill/NetworkEngineer.svg"
import DataIcon from "../assets/skill/Data.svg"
import SoftwareDeveloperIcon from "../assets/skill/SoftwareDeveloper.svg"
import TechnicalWriterIcon from "../assets/skill/TechnicalWriter.svg"
import WebDeveloperIcon from "../assets/skill/WebDeveloper.svg"

export type Skill = {
    title: string
    icon: string
    tags: string[]
    /** Rendered as raw HTML so entries can link out. */
    body: string
}

export const skills: Skill[] = [
    {
        title: "Software Developer",
        icon: SoftwareDeveloperIcon.src,
        tags: ["Rust", "C", "Go", "Python"],
        body: `Over a decade designing and building applications and tools — automation bots, web scrapers, packet generators, and custom utilities. I work most comfortably in Rust, C, Go, and Python, which lets me pick the language that fits the problem rather than bending the problem to fit a language.`
    },
    {
        title: "Web Developer",
        icon: WebDeveloperIcon.src,
        tags: ["Next.js", "Astro", "React", "TypeScript"],
        body: `A full-stack developer with ten-plus years across modern web technologies: Next.js, Astro, React, TypeScript, Tailwind CSS, PHP, Laravel, Python, and Django. I care about performance budgets and code that the next person can actually maintain.`
    },
    {
        title: "Network Engineer",
        icon: NetworkEngineerIcon.src,
        tags: ["XDP/eBPF", "IPTables", "Packet analysis"],
        body: `Network engineering and systems programming across Linux and Windows. I've built high-performance Linux firewalls on <a href="https://www.iovisor.org/technology/xdp" target="_blank" rel="noopener noreferrer">XDP</a> for line-rate packet processing, and work day to day with IPTables and NFTables, packet flow analysis, tunneling protocols, and traffic management.`
    },
    {
        title: "Game Developer",
        icon: GameDeveloperIcon.src,
        tags: ["Godot", "Source engine", "Modding"],
        body: `Programming started here, at twelve. Since then I've shipped modifications for titles like Counter-Strike and Left 4 Dead, published open-source assets for engines such as <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">Godot</a>, and now run game development assets and a mod workshop through <a href="https://moddingcommunity.com" target="_blank" rel="noopener noreferrer">The Modding Community</a>.`
    },
    {
        title: "Data & Analytics",
        icon: DataIcon.src,
        tags: ["ClickHouse", "PostgreSQL", "MySQL", "Grafana", "Prometheus"],
        body: `Designing schemas and query paths for workloads that outgrow a general-purpose database. I use ClickHouse for high-volume event and analytics data — server telemetry, traffic records, usage metrics — with PostgreSQL and MySQL handling the transactional side.`
    },
    {
        title: "Technical Writer",
        icon: TechnicalWriterIcon.src,
        tags: ["Guides", "Knowledge bases", "Docs"],
        body: `Ten-plus years writing guides and knowledge base articles for both corporate teams and my own projects, spanning gaming, modding, networking, and programming. Breaking a complicated thing into steps someone can follow is the part I enjoy most — there are examples further down this page.`
    },
    {
        title: "Customer Service",
        icon: CustomerServiceIcon.src,
        tags: ["Support", "Ticketing", "Troubleshooting"],
        body: `As a technical support engineer I've helped customers over phone, ticketing systems, and live chat. Diagnosing the actual problem and explaining it in detail is the part I excel at, especially through live chat and detailed ticket responses.`
    }
]
