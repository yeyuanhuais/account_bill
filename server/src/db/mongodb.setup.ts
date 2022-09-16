import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

export const setupMongodb = () => {
  // 从configService中获取环境变量，并连接mongo
  return MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
      const mongooseOptions: MongooseModuleOptions = {
        uri: configService.get<string>('MONGODB_URL'),
        dbName: configService.get<string>('MONGO_DBS'),
      };
      return mongooseOptions;
    },
    inject: [ConfigService],
  });
};
