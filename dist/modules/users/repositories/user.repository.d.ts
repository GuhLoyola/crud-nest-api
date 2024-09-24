import { UserDto } from "src/dtos/user/user.dto";
import { PrismaService } from "src/modules/core/prisma.service";
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
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
    createUser(data: UserDto): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    updateUser(userId: any, userDto: UserDto): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    deleteUser(userId: any): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
}
