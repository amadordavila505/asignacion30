import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca {
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id?: number;

    @Column({type: 'varchar', length: '60', nullable: false }) //Campos de una tabla
    marca: string;

    @Column({type: 'int8', nullable: false}) //Campos de una tabla
    user_id: number; 
}
