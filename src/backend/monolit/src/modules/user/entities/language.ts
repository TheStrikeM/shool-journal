import * as Joi from "joi";
import {LanguageEnum} from "../interfaces/LanguageEnum";
import {InvalidArgumentException} from "node-exceptions";

export class Language {
    private readonly value: string

    constructor(value: string) {
        Joi.assert(
            value,
            Joi.string().valid(...Object.values(LanguageEnum)),
            new InvalidArgumentException('Invalid language')
        )
        this.value = value
    }

    public getValue(): string {
        return this.value
    }
}