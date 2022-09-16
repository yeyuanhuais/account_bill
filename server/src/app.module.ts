import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { setupMongodb } from './db/mongodb.setup';
import { UsersModule } from './modules/users/users.module';
// mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=writeapp&w=1
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    // mongodb
    setupMongodb(),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
