import { IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'John@gmail.com', description: 'Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '29', description: 'Age' })
  @IsInt()
  @Min(1)
  age: number;
}
