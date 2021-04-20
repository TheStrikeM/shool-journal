import { Logger } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {DatabaseConfigService} from "./services/database-config.service";

const logger = new Logger("UserModule")

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env']
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfigService
        })
    ],
    providers: [DatabaseConfigService]
})
export class UserModule implements OnModuleInit {
    onModuleInit(): void {
        logger.log("UserModule has success started!")
    }
}