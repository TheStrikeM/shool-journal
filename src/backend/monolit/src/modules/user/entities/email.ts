import * as Joi from "joi";
import {InvalidArgumentException} from "node-exceptions";

export class Email {
    private readonly value: string

    constructor(value: string) {
        Joi.assert(
            value,
            Joi.string().email().required(),
            new InvalidArgumentException('Invalid email')
        )
        this.value = value
    }

    public getValue(): string { return this.value }
}