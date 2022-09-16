import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('用户模块')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @ApiCreatedResponse({
  //   description: '添加用户',
  // })
  @Post('add')
  @ApiBody({
    description: '添加用户',
    type: CreateUserDto,
  })
  @ApiOperation({ summary: '创建用户', description: '创建用户' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('register')
  @ApiBody({
    description: '注册用户',
    type: CreateUserDto,
  })
  @ApiOperation({ summary: '注册用户', description: '注册用户' })
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Get('findAll')
  @ApiOperation({ summary: '查找全部用户', description: '查找全部用户' })
  @ApiQuery({ name: 'pageSize', required: true })
  @ApiQuery({ name: 'pageNum', required: true })
  async findAll(@Query() query) {
    // throw new HttpException('文章已存在', 401);
    const users = await this.usersService.findAll(query);
    return users;
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID查找用户' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改用户' })
  @ApiBody({ type: UpdateUserDto, description: '修改用户' })
  @ApiResponse({
    // code: '200',
    description: '成功返回0',
    type: UpdateUserDto,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
