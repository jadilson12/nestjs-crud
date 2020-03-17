import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'auth/guards/local-auth.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login on system' })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Show profile on user' })
  getProfile(@Request() req) {
    return req.user;
  }
}
