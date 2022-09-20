import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Public } from "src/core/decorators/public.decorator";
import { AuthService } from "../auth/auth.service";
import { CreateUserDto } from "./dto/create_user.dto";
import { FindUserDto } from "./dto/find_user.dto";
import { LoginUserDto } from "./dto/login.dto";
import { UpdateUserDto } from "./dto/update_user.dto";
import { UsersService } from "./users.service";

@Controller("users")
@ApiTags("用户模块")
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Post("add")
  @ApiBody({
    description: "添加用户",
    type: CreateUserDto
  })
  @ApiOperation({ summary: "创建用户", description: "创建用户" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get("findAll")
  @ApiOperation({ summary: "查找全部用户", description: "查找全部用户" })
  @ApiQuery({ name: "pageSize", required: true })
  @ApiQuery({ name: "pageNum", required: true })
  @ApiResponse({ type: FindUserDto })
  async findAll(@Query() query) {
    const users = await this.usersService.findAll(query);
    return users;
  }

  @Get(":id")
  @ApiOperation({ summary: "根据ID查找用户" })
  findOne(@Param("id") id: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "修改用户" })
  @ApiBody({ type: UpdateUserDto, description: "修改用户" })
  @ApiResponse({
    // code: '200',
    description: "成功返回0",
    type: UpdateUserDto
  })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "删除用户" })
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @Post("register")
  @Public()
  @ApiBody({
    description: "注册用户",
    type: CreateUserDto
  })
  @ApiOperation({ summary: "注册用户", description: "注册用户" })
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Post("login")
  @Public()
  @ApiOperation({ summary: "登录用户", description: "登录用户" })
  async login(@Body() loginUserDto: LoginUserDto) {
    const { account, password } = loginUserDto;
    const authResult = await this.authService.validateUser({ account, password });
    if (authResult) {
      return this.authService.certificate(authResult);
    }
  }
  @Post("wxLogin")
  @Public()
  @ApiOperation({ summary: "微信登录用户", description: "微信用户" })
  async wxLogin(@Body() loginUserDto: LoginUserDto) {
    const { loginMethod, code } = loginUserDto;
    if (loginMethod === "weixin") {
      const result = await this.usersService.weixinLogin(code);
      const findUser = await this.usersService.findOne({ openid: result.openid });
      if (!findUser) {
        const user = await this.usersService.wxRegister(result);
        return this.authService.certificate(user);
      } else {
        return this.authService.certificate(findUser);
      }
    }
  }
}
