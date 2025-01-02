import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { log } from 'console';
import { Request, Response} from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}

    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        
        return this.usersService.fetchUsers()
    }

    // @Get()
    // getUsers(){
    //     return [{username : 'Aron' , email : 'aron@gmail.com'}]
    // }

    // @Post()
    // createUser(@Req() request : Request , @Res() response : Response){
    //     console.log(request.body);
    //     response.send('Created')
    // }


    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe)userData : CreateUserDto){
        console.log(userData);
        return this.usersService.createUser(userData)
        
        
    }

    // @Get(':id')
    // getUserById(@Req()request:Request , @Res()response:Response){
    //     console.log(request.params);
    //     response.send('id:')
        
    // }

    // @Get(':id/:idProduct')
    // getUserById(@Param('id') id : string , @Param('idProduct') idProduct : string){
    //     console.log(id);
    //     return {id , idProduct}
        
    // }


    @Get(':id')
    getUserById(@Param('id' , ParseIntPipe) id : number){//ParseIntPipe pour que votre id accepte que des valeur numérique
        console.log(id);
        const user =  this.usersService.fetchUserById(id)
        if (!user) throw new HttpException('user not found' , HttpStatus.NOT_FOUND)
        return user
    }
}
