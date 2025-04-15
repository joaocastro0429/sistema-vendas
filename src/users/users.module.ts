import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; // 👈 IMPORTANTE
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UsersController], // 👈 ATENÇÃO
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
