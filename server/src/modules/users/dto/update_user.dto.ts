import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create_user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  private readonly account: string;
  private readonly password: string;
  private readonly phone: number;
  private readonly email: string;
  private readonly status: number;
}
