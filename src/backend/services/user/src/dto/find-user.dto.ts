import {IsEmail, IsUUID} from "class-validator";
import {Id} from "../entities/id";
import {Email} from "../entities/email";

export class FindUserDto {
    @IsUUID('4', {each: true})
    readonly id: Id
}

export class FindUserResult {
    @IsEmail({})
    readonly email: Email
}