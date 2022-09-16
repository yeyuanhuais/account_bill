import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as dayjs from 'dayjs';
const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  account: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  phone: string;
  @Prop()
  last_ip: string;
  @Prop({ default: now })
  create_time: string;
  @Prop({ default: now })
  modify_time: string;
  @Prop()
  email: string;
  @Prop({ default: 1 })
  status: number;
  @Prop({ default: '1' })
  login_method: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
