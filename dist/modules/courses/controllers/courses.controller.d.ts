import { CoursesService } from '../services/courses.service';
import { CourseDto } from 'src/dtos/courses/course.dto';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    getCourses(): Promise<CourseDto[]>;
    getCourse(courseId: number): Promise<CourseDto>;
    addCourse(courseDto: CourseDto): Promise<{
        status: string;
        message: string;
        data: CourseDto;
    }>;
    updateCourse(courseId: number, courseDto: CourseDto): Promise<{
        status: string;
        message: string;
        data: CourseDto;
    }>;
    deleteCourse(courseId: number): Promise<void>;
}
