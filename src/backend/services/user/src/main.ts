import {NestFactory} from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {AppModule} from "./app.module";
import {join} from "path";
import {Logger} from "@nestjs/common";

const logger = new Logger('Main')
async function start() {
    try {
        const PORT = process.env.PORT || 5000,
            app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
                transport: Transport.GRPC,
                options: {
                    package: 'user',
                    protoPath: join(__dirname, '../proto/user.proto'),
                }
            })

        app.listen(() => 
            logger.debug(`Server has started on port https://localhost:${PORT}/`))
    } catch(e) {
        logger.error(e.message)
    }
}

start()