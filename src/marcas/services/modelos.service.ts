import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Modelo } from "../entities/modelo.entity";
import { CreateModeloDto } from "../dto/modelo.dto";


@Injectable()
export class ModelosService {
    constructor(
        @InjectRepository(Modelo)
        private readonly modeloRepo: Repository<Modelo>
    ){}
    //Crear un registro
    async create(createModeloDto: CreateModeloDto) {
        const modelo = this.modeloRepo.create(createModeloDto);
        await this.modeloRepo.save(modelo);

        return modelo;
    }
    //Encontrar un registro
   // findOne(id: number){
       // return this.modeloRepo.findOneBy({id});
   //  }

  //Encontrar un registro con relaciones
  findOne(id: number){
    return this.modeloRepo.findOne({
        where: {id},
        relations:{
            autor: true,
        },
    });
}
    //Mostrar todos los registros 
    findAll() {
        return this.modeloRepo.find({
            order: {id: 'ASC'},
        });
    }
    //Eliminar un registro
    async remove(id: number) {
        const modelo = await this.findOne(id);
        await this.modeloRepo.remove(modelo);
        return 'Modelo eliminado satisfactoriamente '
    }
    //Actualizar un registro o producto
    async update (id: number, cambios: CreateModeloDto){
        const oldModelo = await this.findOne(id);
        const updateModelo = await this.modeloRepo.merge(oldModelo, cambios);
        return this.modeloRepo.save(updateModelo);
    }

}