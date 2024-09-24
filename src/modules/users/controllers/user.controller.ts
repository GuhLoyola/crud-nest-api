import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { UserDto } from 'src/dtos/user/user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {

    constructor(private userService: UsersService) {

    }

    @Get()
    @ApiOkResponse({ description: 'List of all users' })
    async getUsers() {
        const users = await this.userService.getUsers();

        return users
    }

    @Get(':userId')
    @ApiResponse({ description: "List a user using Id"})
    async getUser(
        @Param('userId') userId: number
    ) {
        const user = await this.userService.getUser(userId);

        return user
    }

    @Post()
    @ApiCreatedResponse({ description: 'Added a user to database' })
    async createUser(
        @Body() userDto: UserDto
    ) {
        const user = await this.userService.createUser(userDto)

        return {
            Message:'Added user: ',
            user
        }
    }

    @Put(':userId')
    @ApiOkResponse({ description: 'Update a user using id'} )
    async updateUser(
        @Param('userId') userId: number,
        @Body() userDto: UserDto
    ) {
        const updatedUser = await this.userService.updateUser(userId, userDto)

        return {
            Message: 'Updated user: ',
            updatedUser
        }
    }

    @Delete(':userId')
    @ApiOkResponse({ description: 'Remove a user using Id' })
    async deleteUser(
        @Param('userId') userId: number
    ) {
        const user = await this.userService.deleteUser(userId)

        return {
            Message: 'Removed user: ',
            user
        }
    }
}
