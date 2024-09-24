import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserDto } from 'src/dtos/user/user.dto';

@Injectable()
export class UsersService {

    constructor(
        private readonly userRepository: UserRepository
    ) {}

    getUsers() {
         const users = this.userRepository.getUsers();

         return users
    }

    getUser(userId) {
        const user = this.userRepository.getUser(userId);

        if(!user) {
            throw new HttpException('O usuário com esse ID não existe.', 404)
        }

        return user
    }

    createUser(user: UserDto): Promise<UserDto> {
        const usuario = this.userRepository.createUser(user);

        return usuario;
    }

    updateUser(userId, userDto: UserDto ): Promise<UserDto> {
        const existingUser = this.userRepository.getUser(userId);

        if(!existingUser) {
            throw new HttpException('O usuário com esse ID não existe', 404);
        }

        const updatedUser = this.userRepository.updateUser(userId, userDto);

        return updatedUser
    }

    deleteUser(userId) {

        const user = this.userRepository.deleteUser(userId)

        if(userId === -1) {
            throw new HttpException('O usuário com esse ID não existe', 404)
        }

        return user
    }

}
