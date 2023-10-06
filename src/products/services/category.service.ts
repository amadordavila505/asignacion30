import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from "../dto/category.dto";


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    ){}
    //Crear un registro
        async create(createCategoryDto: CreateCategoryDto) {
        const category = this.categoryRepo.create(createCategoryDto);
        await this.categoryRepo.save(category);

        return category;
    }
    //Encontrar un registro
//findOne(id: number){
      //  return this.productRepo.findOneBy({id});
    // }

    //Encontrar un registro con relaciones
    findOne(id: number){
        return this.categoryRepo.findOne({
            where: {id},
            relations:{
                autor: true,
            },
        });
    }
    //Mostrar todos los registros 
    findAll() {
        return this.categoryRepo.find({
            order: {id: 'ASC'},
        });
    }
    //Eliminar un registro
    async remove(id: number) {
        const category = await this.findOne(id);
        await this.categoryRepo.remove(category);
        return 'Categoria eliminada satisfactoriamente '
    }
    //Actualizar un registro o producto
    async update (id: number, cambios: CreateCategoryDto){
        const oldCategory = await this.findOne(id);
        const updateCategory = await this.categoryRepo.merge(oldCategory, cambios);
        return this.categoryRepo.save(updateCategory);
    }

}