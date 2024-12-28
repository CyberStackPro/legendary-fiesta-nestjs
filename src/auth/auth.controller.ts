import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() createAuthDto: Record<string, any>) {
    return this.authService.signIn(
      createAuthDto.username,
      createAuthDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
