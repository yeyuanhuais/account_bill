import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class LoginUserDto {
  @ApiPropertyOptional({
    description: "账号",
    default: "18160999831"
  })
  @IsString({ message: "账号必须是字符串" })
  @IsOptional()
  readonly account?: string;

  @ApiPropertyOptional({
    description: "密码",
    default: "18160999831"
  })
  @IsString({ message: "密码必须是字符串" })
  @IsOptional()
  readonly password?: string;

  @ApiPropertyOptional({
    description: "微信小程序登录获取的登录凭证",
    default: ""
  })
  @IsString({ message: "小程序登录凭证必须是字符串" })
  @IsOptional()
  readonly code?: string;

  @ApiPropertyOptional({
    description: "登录方式",
    default: "weixin"
  })
  @IsString({ message: "小程序登录凭证必须是字符串" })
  @IsOptional()
  readonly loginMethod?: string;
}
