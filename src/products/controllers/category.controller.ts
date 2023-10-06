import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "../services/category.service";
import { CreateCategoryDto } from "../dto/category.dto";

@Controller ('Category')
export class CategoryController{
    constructor( private readonly categoryService: CategoryService) {} 
    
    @Post()
    async create(@Body() CategoryDto: CreateCategoryDto){
        return await this.categoryService.create(CategoryDto);
    }

    @Get()
    findAll(){
      return this.categoryService.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.categoryService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.categoryService.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createCategoryDto: CreateCategoryDto,
    ) {
        return this.categoryService.update(id, createCategoryDto);
    }
}
