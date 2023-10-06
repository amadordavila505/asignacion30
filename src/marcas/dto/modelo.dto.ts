import {IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateModeloDto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsNumber()
    @IsOptional()
    //@MaxLength(100)
    marca_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    //@MaxLength(300)
    user_id: number;
}