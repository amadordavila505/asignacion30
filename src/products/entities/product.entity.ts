import { Category } from './category.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Proveedor } from './proveedor.entity';
import { ProductImage } from './product-image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int4', nullable: false })
  user_id: number;

  @Column({ type: 'varchar', nullable: true })
  filename: string;

  @Column({ type: 'varchar', nullable: true })
  proveedor_id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;


  //Relaciones a User
  @ManyToOne(() => User)
  @JoinColumn({ 
    name: 'user_id', //El campo que relaciona a mi tabla
    referencedColumnName: 'id'
  })
  autor: User;

  //Relaciones a Categoria
  @ManyToOne(() => Category)
  @JoinColumn({ 
    name: 'category_id', //El campo que relaciona a mi tabla
    referencedColumnName: 'id'
  })
  category: Category;

  //Relaciones a Proveedor
  @ManyToOne(() => Proveedor)
  @JoinColumn({ 
    name: 'proveedor_id', //El campo que relaciona a mi tabla
    referencedColumnName: 'id'
  })
  proveedor: Proveedor;

  //Un producto puede tener muchas imagenes
  @OneToMany(() => ProductImage, (productImage) => productImage.product,{
      cascade: true,
  }) 
  images?: ProductImage[];
}
