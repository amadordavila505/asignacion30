import {IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMarcaDto{

    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    marca: string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;

}