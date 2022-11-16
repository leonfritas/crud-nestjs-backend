import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

//leonardodevfront:4xuHAwGUipHEg1X8@cluster0.oros53e.mongodb.net/test
//mongodb://localhost/nest

@Module({
  imports: [MongooseModule.forRoot('leonardodevfront:4xuHAwGUipHEg1X8@cluster0.oros53e.mongodb.net/test'),
  UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
