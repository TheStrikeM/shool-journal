import {Controller} from "@nestjs/common";
import {GrpcMethod} from "@nestjs/microservices";
import {Id} from "../entities/id";
import {Email} from "../entities/email";
import {Metadata, ServerUnaryCall} from "grpc";

export interface TestById {
    id: Id
}

export interface Test {
    id: Id
    email: Email
}

@Controller()
export class TestService {
    @GrpcMethod('UserService')
    findOne(data: TestById, metadata: Metadata, call: ServerUnaryCall<any>): Test {
        const items = [
            {}
        ]
    }
}