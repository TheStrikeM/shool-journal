import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5001,
        app = await NestFactory.create(AppModule)
    await app.listen(PORT)
}