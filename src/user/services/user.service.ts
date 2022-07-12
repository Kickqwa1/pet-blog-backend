import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  existsByEmail(email: string) {
    return `Is there a user with email: ${email}?`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user by ${updateUserDto}`;
  }
}
