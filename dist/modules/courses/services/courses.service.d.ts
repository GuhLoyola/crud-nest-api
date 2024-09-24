import { CourseRepository } from '../repositories/course.repository';
import { CourseDto } from 'src/dtos/courses/course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    constructor(courseRepository: CourseRepository);
    getCourses(): Promise<{
        id: number;
        title: string;
        description: string | null;
    }[]>;
    getCourse(courseId: any): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    addCourse(course: CourseDto): Promise<CourseDto>;
    updateCourse(courseId: any, courseDto: CourseDto): Promise<CourseDto>;
    deleteCourse(courseId: any): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
}
