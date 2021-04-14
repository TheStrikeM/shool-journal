import {Injectable, OnModuleInit} from "@nestjs/common";
import {Client, ClientGrpc, Transport} from "@nestjs/microservices";
import {join} from "path";
import {Observable} from "rxjs";

interface UserService {
    findOne(id: any): Observable<any>
}

@Injectable()
export class AppService implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: 'user',
            protoPath: join(__dirname, '../proto/user.proto')
        }
    })
    private client: ClientGrpc
    private userService: UserService

    onModuleInit(): any {
        this.userService = this.client.getService<UserService>("UserService")
    }

    findOne(id): Observable<any> {
        return this.userService.findOne({ id })
    }
}