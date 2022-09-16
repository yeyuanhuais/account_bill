import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerException } from 'src/core/exceptions/customer.exception';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
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

  async findOneById(id: number): Promise<User> {
    const user = await this.usersModel.findById(id);
    return user;
  }
  async findOne(query: object): Promise<User> {
    const user = await this.usersModel.findOne(query);
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
    const { account, password, rePassword } = body;
    if (password !== rePassword) {
      throw new CustomerException(1, '两次密码输入不一致');
    }
    const user = await this.findOne({ account });
    if (user && user.constructor === Object && Object.keys(user).length !== 0) {
      console.log(
        '%c user',
        'font-size:13px; background:pink; color:#bf2c9f;',
        user,
      );
      throw new CustomerException(1, '用户已存在');
    }
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const ans = await this.create({ ...body, password: hashPwd });
    // return '成功';
  }
}
