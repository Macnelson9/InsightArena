import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByAddress(stellar_address: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ stellar_address });

    if (!user) {
      throw new NotFoundException(
        `User with address ${stellar_address} not found`,
      );
    }

    return user;
  }
}
