import {Id} from "./id";
import {Email} from "./email";
import {Login} from "./login";
import {Language} from "./language";
import {Column, Entity} from "typeorm";
import {IdTransformer} from "./id.transformer";

@Entity("users")
export class User {
    @Column({
        type: 'uuid',
        primary: true,
        unique: true,
        transformer: new IdTransformer()
    })
    private readonly id: Id
    private readonly email: Email
    private readonly login: Login
    private readonly language: Language

    constructor(id: Id, email: Email, login: Login, language: Language) {
        this.id = id
        this.email = email
        this.login = login
        this.language = language
    }

    public getIp() { return this.id }
    public getEmail() { return this.email }
    public getLogin() { return this.login }
    public getLanguage() { return this.language }
}