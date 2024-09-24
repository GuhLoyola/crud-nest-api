import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
  imports: [UsersModule, CoursesModule],
})
export class AppModule {}
