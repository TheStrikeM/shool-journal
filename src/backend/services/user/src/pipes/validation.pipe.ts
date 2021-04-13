import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {validate} from "class-validator";
import {plainToClass} from "class-transformer";
import {RpcException} from "@nestjs/microservices";

export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            let messages = errors.map(err =>
                `${err.property} - ${Object.values(err.constraints).join(', ')}`)
            throw new RpcException(messages)
        }
        return value
    }
}