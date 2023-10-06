import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from '../dto/user.dto';
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersService) {}

    @Post()
    async create(@Body() userDto:CreateUserDto){
        return await this.usersServices.create(userDto);
    }
    @Get()
    findAll() {
        return this.usersServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.usersServices.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersServices.remove(id);
    }
    //El metodo patch actualiza parcialmente
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersServices.update(id, createUserDto);
    }
}