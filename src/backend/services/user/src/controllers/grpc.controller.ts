import {Controller, UseFilters, UsePipes} from "@nestjs/common";
import {GrpcMethod} from "@nestjs/microservices";
import {Metadata, ServerUnaryCall} from "grpc";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user";
import {Repository} from "typeorm";
import {FindUserDto} from "../dto/find-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";
import {ValidationException} from "../exceptions/validation.exception";

@Controller()
export class TestController {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    @GrpcMethod('UserService')
    @UseFilters(new ValidationException())
    @UsePipes(new ValidationPipe())
    async findOne(data: FindUserDto, metadata: Metadata, call: ServerUnaryCall<any>): Promise<User> {
        const { id } = data
        return this.userRepository.findOne(id.getValue())
    }
}