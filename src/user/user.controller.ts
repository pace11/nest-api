/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponseDto } from 'src/common/dto/api-response';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ApiResponseDto<any>> {
    try {
      await this.userService.create(createUserDto);
      return {
        message: 'success',
      };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new ConflictException('email is already in use');
      }
      throw new InternalServerErrorException('internal server error');
    }
  }

  @Get()
  async findAll(): Promise<ApiResponseDto<any>> {
    const users = await this.userService.findAll();
    return {
      message: 'success',
      data: users,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponseDto<any>> {
    const user = await this.userService.findOne(+id);
    return {
      message: 'success',
      data: user,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ApiResponseDto<any>> {
    const update = await this.userService.update(+id, updateUserDto);
    if (!update) {
      return {
        message: 'user not found',
        data: update,
      };
    }
    return {
      message: 'success',
      data: update,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponseDto<any>> {
    const remove = await this.userService.remove(+id);
    if (!remove.affected) {
      return {
        message: 'user not found',
        data: !!remove.affected,
      };
    }
    return {
      message: 'success',
    };
  }
}
