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
exports.CourseRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma.service");
let CourseRepository = class CourseRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCourses() {
        const courses = await this.prisma.course.findMany({});
        return courses;
    }
    async getCourse(courseId) {
        const id = Number(courseId);
        const course = this.prisma.course.findUnique({
            where: {
                id: id
            }
        });
        return course;
    }
    async createCourse(data) {
        const course = await this.prisma.course.create({
            data: {
                title: data.title,
                description: data.description
            }
        });
        return course;
    }
    async updateCourse(courseId, courseDto) {
        const id = Number(courseId);
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
        const id = Number(courseID);
        const course = await this.prisma.course.delete({
            where: {
                id: id
            }
        });
        return course;
    }
};
exports.CourseRepository = CourseRepository;
exports.CourseRepository = CourseRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CourseRepository);
//# sourceMappingURL=course.repository.js.map