import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '账号',
    default: '18160999831',
  })
  @IsNotEmpty({ message: '账号不能为空' })
  private readonly account: string;

  @ApiProperty({
    description: '密码',
    default: '18160999831',
  })
  @IsNotEmpty({ message: '密码不能为空' })
  private readonly password: string;

  @ApiPropertyOptional({
    description: '手机号',
    default: '18160999831',
  })
  @IsMobilePhone('zh-CN', {}, { message: '手机号码格式错误' })
  private readonly phone: string;

  @ApiPropertyOptional({
    description: '邮件',
    default: '18160999831@qq.com',
  })
  @IsEmail({}, { message: '邮箱格式错误' })
  private readonly email: string;

  @ApiPropertyOptional({
    description: '状态 0-停用 1-正常',
    default: '1',
  })
  @IsOptional()
  @IsEnum(
    { 禁用: 0, 正常: 1 },
    {
      message: 'status只能传入0或1',
    },
  )
  @Type(() => Number)
  private readonly status: number;

  @ApiPropertyOptional({
    description: '登录方式',
    default: '1',
  })
  private readonly login_method: string;
}
