import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LanguageEnum} from "../interfaces/LanguageEnum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => ?)
    roleId: Role[]

    @Column({ type: String, unique: true })
    login: string

    @Column({ type: String })
    password: string

    @Column({ type: String, enum: LanguageEnum, default: LanguageEnum.RU })
    language: LanguageEnum

    @Column({ type: Boolean })
    online: boolean

    @Column({ type: Date })
    lastOnline: Date

    @Column({ type: String })
    timeZone: string

    @Column({ type: Number, default: 0 })
    rating: number

    @Column({ type: String })
    status: string
}