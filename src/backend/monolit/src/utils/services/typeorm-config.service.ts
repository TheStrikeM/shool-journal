import { Injectable } from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";

type DatabaseConfig = Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): DatabaseConfig {
        const settings: DatabaseConfig = {
            type: "postgres",
            host: this.configService.get<string>('DATABASE_HOST'),
            port: parseInt(this.configService.get<string>('DATABASE_PORT')),
            username: this.configService.get<string>('DATABASE_USERNAME'),
            password: this.configService.get<string>('DATABASE_PASSWORD'),
            database: this.configService.get<string>('DATABASE_NAME')
        }
        return settings
    }
}