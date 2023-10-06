import { Product } from './product.entity';
import { Column,Entity,ManyToOne, PrimaryGeneratedColumn } 
from "typeorm";

@Entity()
export class ProductImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type:'varchar', nullable:true })
    url: string;

    //Relacion product image a product
    //muchas imagenes tienen un producto
    @ManyToOne(() => Product, (product) => product.images, {
      onDelete: 'CASCADE',
    })
    product:Product;
}