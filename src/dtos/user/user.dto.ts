import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    @ApiProperty({ type: String, description: "User name"})
    name: string

    @ApiProperty({ type: String, description: "User email"})
    email: string
}