import {Connection, Repository} from "typeorm";
import {Test} from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import {v4} from "uuid";
import {User} from "./user";
import {Email} from "./email";
import {Id} from "./id";

describe("user", () => {

    let userRepository: Repository<User>
    let connection: Connection

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    name: "default",
                    synchronize: true,
                    dropSchema: true,
                    entities: [User],
                    type: "postgres",
                    username: "postgres",
                    password: "123456",
                    database: "v_object",
                    keepConnectionAlive: true
                })
            ]
        }).compile();

        const app = module.createNestApplication()
        await app.init()

        connection = app.get(Connection)
        userRepository = connection.getRepository<User>(User)
    })

    it('should be connected', () => {
        expect(connection.isConnected).toBeTruthy()
    })

    it("should be save and create user", async () => {
        const id = new Id(v4()),
            user = new User(id, new Email("test@gmail.com"))
        await userRepository.save(user)

        const loadedUser = await userRepository.findOne(id.getValue())
        expect(loadedUser).toEqual(user)
    })
})