import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dtos/user/user.dto";
import { PrismaService } from "src/modules/core/prisma.service";

@Injectable()
export class UserRepository {
    constructor( private prisma: PrismaService) {}

    async getUsers() {
        const users = await this.prisma.user.findMany({});

        return users
    }

    async getUser(userId) {

        const id = Number(userId)

        const user = this.prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return user

    }

    async createUser(data: UserDto) {
        const user = await this.prisma.user.create({
            data: data
        });

        return user
    }

    async updateUser(userId, userDto: UserDto) {

        const id = Number(userId)

        const updatedUser = await this.prisma.user.update({
            where:{
                id: id
            },
            data: {
                name: userDto.name,
                email: userDto.email
            }
        });

        return updatedUser
    }

    async deleteUser(userId) {
        const id = Number(userId)

        const user = await this.prisma.user.delete({
            where: {
                id: id
            }
        });

        return user
    }
}