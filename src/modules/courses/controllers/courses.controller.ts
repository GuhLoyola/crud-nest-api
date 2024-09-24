import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CoursesService } from '../services/courses.service';
import { CourseDto } from 'src/dtos/courses/course.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly courseService: CoursesService
    ) { }

    @Get()
    @ApiOkResponse({ description: 'List of all courses' })
    @HttpCode(200)
    async getCourses(): Promise<CourseDto[]> {
        const courses = await this.courseService.getCourses();

        return courses
    }

    @Get(':courseId')
    @ApiOkResponse({ description: "List a course using Id" })
    @HttpCode(200)
    async getCourse(
        @Param('courseId', ParseIntPipe) courseId: number
    ): Promise<CourseDto> {
        const course = await this.courseService.getCourse(courseId)

        return course
    }

    @Post()
    @ApiCreatedResponse({ description: 'Add a new course to database' })
    @HttpCode(201)
    async addCourse
        (
            @Body() courseDto: CourseDto
        ) {
        const course = await this.courseService.addCourse(courseDto);

        return {
            status: 'success',
            message: 'Added course: ',
            data: course
        }
    }

    @Put(':courseId')
    @ApiOkResponse({ description: 'Update a course using Id' })
    @HttpCode(200)
    async updateCourse(
        @Param('courseId', ParseIntPipe) courseId: number,
        @Body() courseDto: CourseDto
    ) {
        const updatedCourse = await this.courseService.updateCourse(courseId, courseDto)

        return {
            status: 'success',
            message: 'Updated course: ',
            data: updatedCourse
        }
    }

    @Delete(':courseId')
    @ApiOkResponse({ description: 'Remove a course using Id' })
    @HttpCode(204)
    async deleteCourse(
        @Param('courseId', ParseIntPipe) courseId: number
    ) {
        await this.courseService.deleteCourse(courseId)
    }

}
