import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  existsByEmail(email: string) {
    return `Is there a user with email: ${email}?`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user by ${updateUserDto}`;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
