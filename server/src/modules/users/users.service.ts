import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.usersModel(createUserDto);
    return createUser.save();
  }

  async findAll(query): Promise<User[]> {
    const users = await this.usersModel
      .find()
      .skip(query.pageSize * query.pageNum)
      .limit(query.pageSize)
      .sort({ _id: -1 })
      .exec();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersModel.findById(id);
    return user;
  }
  async findOneByAccount(account: string): Promise<User> {
    const user = await this.usersModel.findOne({ account });
    console.log(
      '%c user',
      'font-size:13px; background:pink; color:#bf2c9f;',
      user,
    );
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const modifyUser = await this.usersModel.findByIdAndUpdate(
      id,
      updateUserDto,
    );
    return modifyUser;
  }

  async remove(id: number) {
    await this.usersModel.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }

  async register(body: any): Promise<any> {
    const { account } = body;
    const user = await this.findOneByAccount(account);
    return '成功';
  }
}
