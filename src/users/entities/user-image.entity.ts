import { Column,Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';

@Entity()
export class UserImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type:'varchar', nullable:true })
    url: string;

    //Relacion product image a product
    //muchas imagenes tienen un producto
    @ManyToOne(() => User, (user) => user.images, {
      onDelete: 'CASCADE',
    })
    user:User;
}