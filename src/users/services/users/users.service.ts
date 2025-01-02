import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {username:"Aron" , eamil :"aron@gmail.com"},
        {username:"Cody" , eamil :"cody@gmail.com"},
        {username:"Roody" , eamil :"roody@gmail.com"},
    ];

    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails){
        this.fakeUsers.push(userDetails);
        return userDetails
    }

    fetchUserById(id : number){
        return null //{id , username :"aron" , email :"aron@gmail.com"}
    }
}
