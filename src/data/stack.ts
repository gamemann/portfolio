import ClickHouseIcon from "../assets/stack/ClickHouse.svg"
import CodeIcon from "../assets/stack/Code.svg"
import CSharpIcon from "../assets/stack/Csharp.svg"
import CssIcon from "../assets/stack/Css.svg"
import DjangoIcon from "../assets/stack/Django.svg"
import DockerIcon from "../assets/stack/Docker.svg"
import GoIcon from "../assets/stack/Go.svg"
import HtmlIcon from "../assets/stack/Html.svg"
import JavaIcon from "../assets/stack/Java.svg"
import JsIcon from "../assets/stack/Js.svg"
import KubernetesIcon from "../assets/stack/Kubernetes.svg"
import LinuxIcon from "../assets/stack/Linux.svg"
import MongoDbIcon from "../assets/stack/MongoDb.svg"
import MysqlIcon from "../assets/stack/Mysql.svg"
import PostgresqlIcon from "../assets/stack/Postgresql.svg"
import PythonIcon from "../assets/stack/Python.svg"
import ReactIcon from "../assets/stack/React.svg"
import RustIcon from "../assets/stack/Rust.svg"
import TypescriptIcon from "../assets/stack/Typescript.svg"
import WindowsIcon from "../assets/stack/Windows.svg"

export type StackGroup = "Languages" | "Web" | "Infrastructure" | "Data"

export type StackItem = {
    title: string
    icon: string
    group: StackGroup
    /** 1–10. 8+ reads as "Very Experienced", 4–7 "Experienced", below that "Familiar". */
    expLevel: number
}

export const stackItems: StackItem[] = [
    { title: "C", icon: CodeIcon.src, group: "Languages", expLevel: 10 },
    { title: "Rust", icon: RustIcon.src, group: "Languages", expLevel: 9 },
    { title: "Golang", icon: GoIcon.src, group: "Languages", expLevel: 10 },
    { title: "Python", icon: PythonIcon.src, group: "Languages", expLevel: 10 },
    { title: "JavaScript", icon: JsIcon.src, group: "Languages", expLevel: 10 },
    { title: "TypeScript", icon: TypescriptIcon.src, group: "Languages", expLevel: 10 },
    { title: "C#", icon: CSharpIcon.src, group: "Languages", expLevel: 5 },
    { title: "Java", icon: JavaIcon.src, group: "Languages", expLevel: 2 },

    { title: "React", icon: ReactIcon.src, group: "Web", expLevel: 10 },
    { title: "HTML", icon: HtmlIcon.src, group: "Web", expLevel: 10 },
    { title: "CSS", icon: CssIcon.src, group: "Web", expLevel: 10 },
    { title: "Django", icon: DjangoIcon.src, group: "Web", expLevel: 4 },

    { title: "Linux", icon: LinuxIcon.src, group: "Infrastructure", expLevel: 10 },
    { title: "Docker", icon: DockerIcon.src, group: "Infrastructure", expLevel: 10 },
    { title: "Windows", icon: WindowsIcon.src, group: "Infrastructure", expLevel: 9 },
    { title: "Kubernetes", icon: KubernetesIcon.src, group: "Infrastructure", expLevel: 3 },

    { title: "PostgreSQL", icon: PostgresqlIcon.src, group: "Data", expLevel: 9 },
    { title: "MySQL", icon: MysqlIcon.src, group: "Data", expLevel: 9 },
    { title: "ClickHouse", icon: ClickHouseIcon.src, group: "Data", expLevel: 8 },
    { title: "MongoDB", icon: MongoDbIcon.src, group: "Data", expLevel: 3 }
]

export const stackGroups: StackGroup[] = ["Languages", "Web", "Infrastructure", "Data"]
