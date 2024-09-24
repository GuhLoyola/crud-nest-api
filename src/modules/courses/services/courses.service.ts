import { HttpException, Injectable } from '@nestjs/common';
import { CourseRepository } from '../repositories/course.repository';
import { CourseDto } from 'src/dtos/courses/course.dto';

@Injectable()
export class CoursesService {

    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    getCourses() {
        const course = this.courseRepository.getCourses();

        return course;
    }

    getCourse(courseId) {
        const course = this.courseRepository.getCourse(courseId)

        if(!course) {
            throw new HttpException('O curso com esse ID não existe.', 404)
        }

        return course
    }

    addCourse(course: CourseDto): Promise<CourseDto>{
        const curso = this.courseRepository.createCourse(course);

        return curso
    }

    updateCourse(courseId, courseDto: CourseDto): Promise<CourseDto>{
        const existingCourse = this.courseRepository.getCourse(courseId)

        if(!existingCourse) {
            throw new HttpException('O curso com esse ID não existe.', 404);
        }

        const updatedCourse = this.courseRepository.updateCourse(courseId, courseDto);

        return updatedCourse

    }

    deleteCourse(courseId) {
        const course = this.courseRepository.deleteCourse(courseId);

        if(courseId === -1) {
            throw new HttpException('O curso com esse ID não existe', 404)
        }

        return course
    }

}
