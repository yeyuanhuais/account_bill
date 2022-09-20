import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class FindUserDto {
  @ApiProperty({
    description: "账号",
    default: "18160999831"
  })
  private readonly account: string;

  @ApiProperty({
    description: "密码",
    default: "18160999831"
  })
  @Exclude()
  private readonly password: string;

  @ApiPropertyOptional({
    description: "手机号",
    default: "18160999831"
  })
  private readonly phone?: string;

  @ApiPropertyOptional({
    description: "邮件",
    default: "18160999831@qq.com"
  })
  private readonly email?: string;

  @ApiPropertyOptional({
    description: "状态 0-停用 1-正常",
    default: "1"
  })
  private readonly status?: number = 1;

  @ApiPropertyOptional({
    description: "创建时间",
    default: "1"
  })
  create_time: string;
  @ApiPropertyOptional({
    description: "修改时间",
    default: "1"
  })
  modify_time: string;

  @ApiPropertyOptional({
    description: "密码盐",
    default: "1"
  })
  @Exclude()
  private readonly salt?: string;
}
