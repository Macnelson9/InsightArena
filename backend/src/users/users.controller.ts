import { Controller, Get, Param } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Public } from '../common/decorators/public.decorator';
import { UsersService } from './users.service';
import { PublicUserDto } from './dto/public-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':address')
  @Public()
  async getPublicProfile(@Param('address') address: string) {
    const user = await this.usersService.findByAddress(address);
    return plainToInstance(PublicUserDto, user, {
      excludeExtraneousValues: true,
    });
  }
}
