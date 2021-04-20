import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./modules/user/user.module";

@Module({
  imports: [
      UserModule,
      ConfigModule.forRoot({
          envFilePath: ['.env']
      })
  ],
})
export class AppModule {}
