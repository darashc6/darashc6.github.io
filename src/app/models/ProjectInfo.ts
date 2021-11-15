import { LanguageInfo } from "./LanguageInfo";

export interface ProjectInfo {
    name: string,
    description: string,
    img_src: string,
    img_mode: string,
    github_link?: string,
    website_link?: string,
    languages: LanguageInfo[]
}