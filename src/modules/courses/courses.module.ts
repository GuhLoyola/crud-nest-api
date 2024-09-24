import { Module } from '@nestjs/common';
import { CoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { CoreModule } from '../core/core.module';
import { CourseRepository } from './repositories/course.repository';

@Module({
  imports: [CoreModule],
  providers: [CoursesService, CourseRepository],
  controllers: [CoursesController]
})
export class CoursesModule {}
