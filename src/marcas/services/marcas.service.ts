import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Marca } from "../entities/marca.entity";
import { CreateMarcaDto } from '../dto/marcas.dto';



@Injectable()
export class MarcasService {
    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepo: Repository<Marca>
    ){}
    //Crear un registro
    async create(CreateMarcaDto: CreateMarcaDto) {
        const marca = this.marcaRepo.create(CreateMarcaDto);
        await this.marcaRepo.save(marca);

        return marca;
    }
    //Encontrar un registro
    findOne(id: number){
        return this.marcaRepo.findOneBy({id});
    }
    //Mostrar todos los registros 
    findAll() {
        return this.marcaRepo.find({
            order: {id: 'ASC'},
        });
    }
    //Eliminar un registro
    async remove(id: number) {
        const marca = await this.findOne(id);
        await this.marcaRepo.remove(marca);
        return 'Marca eliminada con exito!'
    }
    //Actualizar un registro o producto
    async update (id: number, cambios: CreateMarcaDto){
        const oldMarca = await this.findOne(id);
        const updateMarca = await this.marcaRepo.merge(oldMarca, cambios);
        return this.marcaRepo.save(updateMarca);
    }

}
