import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomerException extends HttpException {
  constructor(code, message) {
    super({ code, message }, HttpStatus.BAD_REQUEST);
  }
}
