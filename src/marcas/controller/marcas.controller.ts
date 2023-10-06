import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { MarcasService } from '../services/marcas.service';
import { CreateMarcaDto } from '../dto/marcas.dto';


@Controller ('Marcas')
export class MarcasController{
    constructor( private readonly marcasService: MarcasService) {} 
    
    @Post()
    async create(@Body() MarcaDto: CreateMarcaDto){
        return await this.marcasService.create(MarcaDto);
    }

    @Get()
    findAll(){
      return this.marcasService.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.marcasService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.marcasService.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createMarcaDto: CreateMarcaDto,
    ) {
        return this.marcasService.update(id, createMarcaDto);
    }
}