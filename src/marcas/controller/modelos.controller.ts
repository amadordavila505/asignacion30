import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ModelosService } from "../services/modelos.service";
import { CreateModeloDto } from "../dto/modelo.dto";

@Controller ('Modelos')
export class ModelosController{
    constructor( private readonly modelosService: ModelosService) {} 
    
    @Post()
    async create(@Body() ModeloDto: CreateModeloDto){
        return await this.modelosService.create(ModeloDto);
    }

    @Get()
    findAll(){
      return this.modelosService.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.modelosService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.modelosService.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createModeloDto: CreateModeloDto,
    ) {
        return this.modelosService.update(id, createModeloDto);
    }
}