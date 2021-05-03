import * as Joi from "joi";
import {InvalidArgumentException} from "node-exceptions";

export class Id {
    private readonly value: string

    constructor(value: string) {
        Joi.assert(
            value,
            Joi.string().uuid({ version: 'uuidv4' }).required(),
            new InvalidArgumentException('Id should be uuidv4 type')
        )
        this.value = value
    }

    public getValue(): string { return this.value }
}