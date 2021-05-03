import {Language} from "./language";
import {LanguageEnum} from "../interfaces/LanguageEnum";

describe('Language', () => {
    it('create', () => {
        const value = LanguageEnum.RU
        const language = new Language(value)
        expect(language).toBeDefined()
        expect<string>(language.getValue()).toBe(value)
    })
})