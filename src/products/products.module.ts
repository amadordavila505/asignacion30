import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { Category } from './entities/category.entity';
import { Proveedor } from './entities/proveedor.entity';
import { ProveedorController } from './controllers/proveedor.controller';
import { ProveedorService } from './services/proveedor.service';


@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Proveedor])],
  controllers: [ProductsController, CategoryController, ProveedorController],
  providers: [ProductService, CategoryService, ProveedorService],
})
export class ProductsModule {}
