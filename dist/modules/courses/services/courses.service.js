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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const course_repository_1 = require("../repositories/course.repository");
let CoursesService = class CoursesService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    getCourses() {
        const course = this.courseRepository.getCourses();
        return course;
    }
    getCourse(courseId) {
        const course = this.courseRepository.getCourse(courseId);
        if (!course) {
            throw new common_1.HttpException('O curso com esse ID não existe.', 404);
        }
        return course;
    }
    addCourse(course) {
        const curso = this.courseRepository.createCourse(course);
        return curso;
    }
    updateCourse(courseId, courseDto) {
        const existingCourse = this.courseRepository.getCourse(courseId);
        if (!existingCourse) {
            throw new common_1.HttpException('O curso com esse ID não existe.', 404);
        }
        const updatedCourse = this.courseRepository.updateCourse(courseId, courseDto);
        return updatedCourse;
    }
    deleteCourse(courseId) {
        const course = this.courseRepository.deleteCourse(courseId);
        if (courseId === -1) {
            throw new common_1.HttpException('O curso com esse ID não existe', 404);
        }
        return course;
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [course_repository_1.CourseRepository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map