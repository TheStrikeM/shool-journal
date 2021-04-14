import {NestFactory} from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {AppModule} from "./app.module";
import {join} from "path";
import {Logger} from "@nestjs/common";

const logger = new Logger('Main')
async function start() {
    try {
        const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
            transport: Transport.GRPC,
            options: {
                url: '0.0.0.0:50051',
                package: 'user',
                protoPath: join(__dirname, '../proto/user.proto'),
            }
        })

        await app.listen(() =>
            logger.debug(`Microservice has started on port https://0.0.0.0:50051'/`))
    } catch(e) {
        logger.error(e.message)
    }
}

start()