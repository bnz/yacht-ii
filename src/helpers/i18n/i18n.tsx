import { i18nKeys } from './i18nKeys'
import { rus } from './rus'
import { eng } from './eng'

export type Language = 'rus' | 'eng'
export const languageDefaultState: Language = 'rus'

const commonSettings = JSON.parse(localStorage.getItem('common-settings') || JSON.stringify({
  language: languageDefaultState,
}))

const lang: Language = commonSettings.language || languageDefaultState

export type LanguageMap = Record<i18nKeys, string>

type LanguagesMap = Record<Language, LanguageMap>

const languagesMap: LanguagesMap = {
  rus,
  eng,
}

export function i18n(key: i18nKeys) {
  const res = languagesMap[lang][key]

  if (res === undefined) {
    return `~${key}~`
  }

  return res
}
