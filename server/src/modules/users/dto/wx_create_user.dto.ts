import { ApiPropertyOptional } from "@nestjs/swagger";

export class WxCreateUserDto {

  @ApiPropertyOptional({
    description: "微信用户唯一标识",
    default: "1"
  })
  private readonly openid?: string;
  
  @ApiPropertyOptional({
    description: "微信会话密钥",
    default: "1"
  })
  private readonly session_key?: string;
}
