export type Guide = {
    title: string
    banner: string
    link: string
    category: "Gaming" | "Security" | "Networking" | "Technology"
    source: "TMC" | "TekWorks"
    summary: string
}

export const guides: Guide[] = [
    {
        title: "How To Setup Steam Link On Raspberry Pi 4",
        banner: "/images/guide/steam-link-setup.webp",
        link: "https://blog.moddingcommunity.com/how-to-set-up-steam-link-on-a-raspberry-pi/",
        category: "Gaming",
        source: "TMC",
        summary: "Installing and running Steam Link on a Raspberry Pi 4 Model B."
    },
    {
        title: "Forms With Dynamic Fields Using React And Formik",
        banner: "/images/guide/dynamic-fields-with-formik.png",
        link: "https://tekworks.net/blog/view/react-form-with-dynamic-fields-and-formik",
        category: "Technology",
        source: "TekWorks",
        summary: "Building forms whose fields are added and removed at runtime, with React and Formik."
    },
    {
        title: "How To Launch A DoS Attack & Drop It",
        banner: "/images/guide/how-to-launch-a-dos-attack-and-drop-it.png",
        link: "https://tekworks.net/blog/view/how-to-launch-a-dos-attack-and-drop-it",
        category: "Security",
        source: "TekWorks",
        summary: "Simulating a DoS attack against your own infrastructure and mitigating it with my open-source tooling."
    },
    {
        title: "Basic Linux Security",
        banner: "/images/guide/basic-linux-security.jpeg",
        link: "https://tekworks.net/blog/view/basic-linux-security",
        category: "Security",
        source: "TekWorks",
        summary: "Hardening a Linux server with OpenSSH, IPTables, and sensible defaults."
    },
    {
        title: "MTR & Trace Route Guide",
        banner: "/images/guide/mtr-traceroute-guide.png",
        link: "https://tekworks.net/blog/view/mtr-and-traceroute-guide",
        category: "Networking",
        source: "TekWorks",
        summary: "Running MTRs and trace routes, and actually reading what they tell you about a network issue."
    },
    {
        title: "How To Install Mods In RDR2",
        banner: "/images/guide/how-to-install-rdr2-mods.jpeg",
        link: "https://blog.moddingcommunity.com/how-to-install-mods-in-rdr2/",
        category: "Gaming",
        source: "TMC",
        summary: "Installing mods in Red Dead Redemption 2 on PC, including Lenny's Mod Loader (LML)."
    },
    {
        title: "How To Download & Run SteamCMD",
        banner: "/images/guide/how-to-run-steamcmd.png",
        link: "https://blog.moddingcommunity.com/how-to-download-run-steamcmd/",
        category: "Gaming",
        source: "TMC",
        summary: "Getting SteamCMD installed and running on both Linux and Windows."
    },
    {
        title: "How To Make A Left 4 Dead 2 Server With Mods",
        banner: "/images/guide/how-to-setup-l4d2-server-with-mods.jpeg",
        link: "https://blog.moddingcommunity.com/how-to-make-a-l4d2-server-with-mods/",
        category: "Gaming",
        source: "TMC",
        summary: "Creating and running a modded Left 4 Dead 2 dedicated server on Windows and Linux."
    },
    {
        title: "How To Make A Garry's Mod Server & Install Addons",
        banner: "/images/guide/how-to-setup-gmod-server-with-mods.png",
        link: "https://blog.moddingcommunity.com/how-to-make-a-gmod-server-install-mods-addons/",
        category: "Gaming",
        source: "TMC",
        summary: "Standing up a Garry's Mod server and installing addons on Windows and Linux."
    }
]

export const guideCategories = ["All", "Gaming", "Security", "Networking", "Technology"] as const
