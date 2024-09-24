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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUsers() {
        const users = this.userRepository.getUsers();
        return users;
    }
    getUser(userId) {
        const user = this.userRepository.getUser(userId);
        if (!user) {
            throw new common_1.HttpException('O usuário com esse ID não existe.', 404);
        }
        return user;
    }
    createUser(user) {
        const usuario = this.userRepository.createUser(user);
        return usuario;
    }
    updateUser(userId, userDto) {
        const existingUser = this.userRepository.getUser(userId);
        if (!existingUser) {
            throw new common_1.HttpException('O usuário com esse ID não existe', 404);
        }
        const updatedUser = this.userRepository.updateUser(userId, userDto);
        return updatedUser;
    }
    deleteUser(userId) {
        const user = this.userRepository.deleteUser(userId);
        if (userId === -1) {
            throw new common_1.HttpException('O usuário com esse ID não existe', 404);
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UsersService);
//# sourceMappingURL=user.service.js.map