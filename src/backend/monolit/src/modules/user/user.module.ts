import { Logger } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common";
import {Module} from "@nestjs/common";

const logger = new Logger("UserModule")
@Module({
    imports: [],
})
export class UserModule implements OnModuleInit {
    onModuleInit(): void {
        logger.log("UserModule has success started!")
    }
}
