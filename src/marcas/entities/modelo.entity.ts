import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "./marca.entity";

@Entity()
export class Modelo{
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id?: number;

    @Column({type: 'int4', nullable: true }) //Campos de una tabla
    marca_id: number;

    @Column({type: 'varchar',}) //Campos de una tabla 
    name: string;
    
    @Column({type: 'int8', nullable: false}) //Campos de una tabla
    user_id: number; 

    //Relaciones
    @ManyToOne(() => Marca)
    @JoinColumn({
        name: 'marca_id', //El campo que relaciona a mi tabla
        referencedColumnName: "id", //Este es el id del usuario
    })
    autor: Marca;
}