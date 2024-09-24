import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersService } from './services/user.service';
import { CoreModule } from '../core/core.module';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [CoreModule],
  controllers: [UserController],
  providers: [UsersService, UserRepository]
})
export class UsersModule {}
