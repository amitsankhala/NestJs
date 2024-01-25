import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException{
    constructor() {
        super('This is the my app exception', HttpStatus.BAD_REQUEST);
      }
}