import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BranchesModule } from './branches/branches.module';
import { DevicesModule } from './devices/devices.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [PrismaModule, AuthModule, BranchesModule, DevicesModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}