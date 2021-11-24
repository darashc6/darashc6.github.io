import { LanguageInfo } from "./LanguageInfo";

export interface ProjectInfo {
    name: string,
    description: string,
    images: string[],
    img_mode: string,
    project_link?: string,
    languages: LanguageInfo[]
}