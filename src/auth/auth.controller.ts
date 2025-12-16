import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('login')
    async login(@Body() loginDto: LoginDto){
        console.log("login",loginDto)
        return this.authService.login(loginDto);
    }

    @Post('signup')
    async singup(@Body() signupDto: SignupDto){
        console.log("signupDto",signupDto)
        return this.authService.signup(signupDto)
    }

    @Post('logout') // auth/logout
    async loggingout(){

    }

}