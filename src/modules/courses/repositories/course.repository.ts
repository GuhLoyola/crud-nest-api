import { Injectable } from "@nestjs/common";
import { CourseDto } from "src/dtos/courses/course.dto";
import { PrismaService } from "src/modules/core/prisma.service";

@Injectable()
export class CourseRepository {
    constructor( private prisma: PrismaService) {}

    async getCourses() {
        const courses = await this.prisma.course.findMany({});

        return courses
    }

    async getCourse(courseId) {

        const id = Number(courseId)

        const course = this.prisma.course.findUnique({
            where: {
                id: id
            }
        });

        return course

    }

    async createCourse(data: CourseDto) {
        const course = await this.prisma.course.create({
            data: {
                title: data.title,
                description: data.description
            }
        });

        return course;
    }

    async updateCourse(courseId, courseDto: CourseDto){

        const id = Number(courseId)

        const updatedCourse = await this.prisma.course.update({
            where: {
                id: id
            },
            data: {
                title: courseDto.title,
                description: courseDto.description
            },
        });

        return updatedCourse;
    }

    async deleteCourse(courseID) {
        const id = Number(courseID)

        const course = await this.prisma.course.delete({
            where: {
                id: id
            }
        });

        return course
    }

}