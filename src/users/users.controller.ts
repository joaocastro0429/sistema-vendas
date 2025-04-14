import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Post()
    create(@Body()data:createUserDto){
        
        return this.userService.create(data)
    }

    @Get(":id")
    findOne(@Param('id')id:string){
        return this.userService.findOne(id)
    }
    @Put(":id")
    update(@Param('id')id:string,@Body()data:UpdateUserDto){
        return this.userService.update(data,id)
    }

    @Delete(":id")
    delete(@Param('id')id:string){
        return this.userService.delete(id)
    }
}
