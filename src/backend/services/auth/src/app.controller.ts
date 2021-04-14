import {Controller, Get, Param} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller()
export class AppController {

    constructor(private readonly appService: AppService) {}

    @Get(':id')
    getTest(@Param('id') id: string): any {
        return this.appService.findOne(id)
    }
}