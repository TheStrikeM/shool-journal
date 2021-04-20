import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./modules/user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypeOrmConfigService} from "./utils/services/typeorm-config.service";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: ['.env'],
          isGlobal: true
      }),
      TypeOrmModule.forRootAsync({
          useClass: TypeOrmConfigService,
      }),
      UserModule,
  ],
  providers: [TypeOrmConfigService]
})
export class AppModule {}
