import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileController } from './profile/profile.controller';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, AuthModule, SalesModule],
  controllers: [AppController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
