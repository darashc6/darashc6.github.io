import { LanguageInfo } from "./LanguageInfo";

export interface SkillSetInfo {
    id: string,
    icon: string,
    title: string,
    description: string,
    languages: LanguageInfo[],
}