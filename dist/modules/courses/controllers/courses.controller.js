"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("../services/courses.service");
const course_dto_1 = require("../../../dtos/courses/course.dto");
const swagger_1 = require("@nestjs/swagger");
let CoursesController = class CoursesController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getCourses() {
        const courses = await this.courseService.getCourses();
        return courses;
    }
    async getCourse(courseId) {
        const course = await this.courseService.getCourse(courseId);
        return course;
    }
    async addCourse(courseDto) {
        const course = await this.courseService.addCourse(courseDto);
        return {
            status: 'success',
            message: 'Added course: ',
            data: course
        };
    }
    async updateCourse(courseId, courseDto) {
        const updatedCourse = await this.courseService.updateCourse(courseId, courseDto);
        return {
            status: 'success',
            message: 'Updated course: ',
            data: updatedCourse
        };
    }
    async deleteCourse(courseId) {
        await this.courseService.deleteCourse(courseId);
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'List of all courses' }),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getCourses", null);
__decorate([
    (0, common_1.Get)(':courseId'),
    (0, swagger_1.ApiOkResponse)({ description: "List a course using Id" }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getCourse", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Add a new course to database' }),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "addCourse", null);
__decorate([
    (0, common_1.Put)(':courseId'),
    (0, swagger_1.ApiOkResponse)({ description: 'Update a course using Id' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_dto_1.CourseDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Delete)(':courseId'),
    (0, swagger_1.ApiOkResponse)({ description: 'Remove a course using Id' }),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "deleteCourse", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map