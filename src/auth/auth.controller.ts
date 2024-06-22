import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('profile')
  @UseGuards(AuthGuard('google'))
  async handleLogin(@Req() req) {
    console.log('profile: ', req.user);
    const token = await this.authService.oAuthLogin(req.user);
    return { msg: token };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async handleRedirect() {
    return { msg: 'Go' };
  }
}
