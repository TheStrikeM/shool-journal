import * as Joi from "joi";
import {InvalidArgumentException} from "node-exceptions";

export class Login {
    private readonly value: string

    constructor(value: string) {
        Joi.assert(
            value,
            Joi.string().required(),
            new InvalidArgumentException('Invalid login')
        )
        this.value = value
    }

    public getValue(): string { return this.value }
}