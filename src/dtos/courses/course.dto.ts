import { ApiProperty } from "@nestjs/swagger"

export class CourseDto {
    @ApiProperty({ type: String, description: "Course title" })
    title: string

    @ApiProperty({ type: String, description: "Course description" })
    description: string
}