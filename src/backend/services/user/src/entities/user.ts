import {Column, Entity} from "typeorm";
import {IdTransformer} from "./id.transformer";
import {Id} from "./id";
import {EmailTransformer} from "./email.transformer";
import {Email} from "./email";

@Entity("users")
export class User {
    @Column({
        primary: true,
        unique: true,
        type: 'uuid',
        transformer: new IdTransformer()
    })
    private readonly id: Id;
    
    @Column({
        unique: true,
        type: 'varchar',
        transformer: new EmailTransformer()
    })
    private readonly email: Email;

    constructor(id: Id, email: Email) {
        this.id = id;
        this.email = email;
    }

    public getId(): Id {
        return this.id
    }

    public getEmail(): Email {
        return this.email
    }
}
