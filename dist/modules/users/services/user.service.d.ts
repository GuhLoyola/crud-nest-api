import { UserRepository } from '../repositories/user.repository';
import { UserDto } from 'src/dtos/user/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
    getUser(userId: any): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    createUser(user: UserDto): Promise<UserDto>;
    updateUser(userId: any, userDto: UserDto): Promise<UserDto>;
    deleteUser(userId: any): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
}
