import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user";
import {TestController} from "./controllers/grpc.controller";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: "default",
            synchronize: true,
            entities: [User],
            type: "postgres",
            username: "postgres",
            password: "123456",
            database: "v_object",
            keepConnectionAlive: true
        }),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [TestController]
})
export class AppModule {}