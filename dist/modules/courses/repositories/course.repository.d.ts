import { CourseDto } from "src/dtos/courses/course.dto";
import { PrismaService } from "src/modules/core/prisma.service";
export declare class CourseRepository {
    private prisma;
    constructor(prisma: PrismaService);
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
    createCourse(data: CourseDto): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    updateCourse(courseId: any, courseDto: CourseDto): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    deleteCourse(courseID: any): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
}
