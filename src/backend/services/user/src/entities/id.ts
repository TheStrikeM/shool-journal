import * as Joi from "joi";
import {InvalidArgumentException} from "node-exceptions";

export class Id {
    private readonly value: string;

    constructor(value: string) {
        Joi.assert(
            value,
            Joi.string().uuid({version: "uuidv4"}).required(),
            new InvalidArgumentException("Required uuid version 4 only")
        )
        this.value = value;
    }

    public getValue(): string {
        return this.value
    }
}