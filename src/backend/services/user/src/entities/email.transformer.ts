import {ValueTransformer} from "typeorm";
import {Email} from "./email";

export class EmailTransformer implements ValueTransformer {
    public from(value: string): Email {
        return new Email(value);
    }
    
    public to(value: Email | string): string {
        return typeof value === "string" ? value : value.getValue()
    }
}