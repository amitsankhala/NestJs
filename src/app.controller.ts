import { BadRequestException, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomHttpExceptionFilter } from './app.exception.filter';
// import { CustomException } from './app.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getinfo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  @UseFilters(CustomHttpExceptionFilter)
  additem(): string {
    throw new BadRequestException();
    return this.appService.addingitem();
  }


}

