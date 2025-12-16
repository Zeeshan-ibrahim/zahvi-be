import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('login')
    async login( loginDto: LoginDto){
        return this.authService.login(loginDto);
    }

    @Post('singup')
    async singup(signupDto: SignupDto){
        return this.authService.signup(signupDto)
    }

}
