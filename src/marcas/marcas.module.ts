import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from "./entities/marca.entity";
import { MarcasService } from "./services/marcas.service";
import { MarcasController } from './controller/marcas.controller';
import { ModelosController } from './controller/modelos.controller';
import { ModelosService } from './services/modelos.service';
import { Modelo } from "./entities/modelo.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Marca, Modelo])],
    providers: [MarcasService, ModelosService],
    //aqui los servicios
    controllers:[MarcasController, ModelosController],
    //aqui los controladores
    
})
export class MarcasModule{}
