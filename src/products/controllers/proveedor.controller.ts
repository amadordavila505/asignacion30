import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProveedorDto } from "../dto/proveedor.dto";
import { ProveedorService } from "../services/proveedor.service";


@Controller ('proveedor')
export class ProveedorController{
    constructor( private readonly proveedor: ProveedorService) {} 
    
    @Post()
    async create(@Body() ProveedorDto: CreateProveedorDto){
        return await this.proveedor.create(ProveedorDto);
    }

    @Get()
    findAll(){
      return this.proveedor.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.proveedor.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.proveedor.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createProveedorDto: CreateProveedorDto,
    ) {
        return this.proveedor.update(id, createProveedorDto);
    }
}
