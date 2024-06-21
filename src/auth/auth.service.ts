import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = this.userService.findUser(username, password);
    if (user) {
      const payload = { username: user.username, id: user.id };
      const accessToken = this.jwtService.sign(payload);
      return {
        access_token: accessToken,
      };
    }
    throw new UnauthorizedException();
  }
}
