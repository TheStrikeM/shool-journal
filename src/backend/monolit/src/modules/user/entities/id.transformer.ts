import {ValueTransformer} from "typeorm";
import {Id} from "./id";

export class IdTransformer implements ValueTransformer {
    public from(value: string): Id {
        return new Id(value)
    }

    public to(value: Id | string): string {
        return typeof value === 'string' ? value : value.getValue()
    }
}