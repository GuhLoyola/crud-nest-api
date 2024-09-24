import { UsersService } from '../services/user.service';
import { UserDto } from 'src/dtos/user/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
    getUser(userId: number): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    createUser(userDto: UserDto): Promise<{
        Message: string;
        user: UserDto;
    }>;
    updateUser(userId: number, userDto: UserDto): Promise<{
        Message: string;
        updatedUser: UserDto;
    }>;
    deleteUser(userId: number): Promise<{
        Message: string;
        user: {
            id: number;
            email: string;
            name: string | null;
        };
    }>;
}
