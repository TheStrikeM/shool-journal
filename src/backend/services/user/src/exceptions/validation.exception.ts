import {ArgumentsHost, Catch, HttpException, HttpStatus, RpcExceptionFilter} from "@nestjs/common";
import {RpcException} from "@nestjs/microservices";
import {Observable, throwError} from "rxjs";

@Catch(RpcException)
export class ValidationException implements RpcExceptionFilter<RpcException> {
    catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
        console.log(exception.message)
        return throwError(exception.getError())
    }
}