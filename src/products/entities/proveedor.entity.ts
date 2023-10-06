import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id?: number;

    @Column({type: 'varchar'}) //Campos de una tabla 
    categoria: string;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})//Campos de una tabla
    created_at:Date;

    @Column({type:'int4', nullable: false}) //Campos de una tabla
    user_id: number;
    

    //Relaciones 

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'user_id', // El campo que relaciona a mi tabla
        referencedColumnName: "id", //Este es el id del usuario
    })
    autor: User;

}
