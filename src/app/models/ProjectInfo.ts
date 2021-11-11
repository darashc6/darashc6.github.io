import { LanguageInfo } from "./LanguageInfo";

export interface ProjectInfo {
    name: string,
    description: string,
    img_src: string,
    img_height: number,
    img_width: number,
    github_link?: string,
    website_link?: string,
    languages: LanguageInfo[]
}