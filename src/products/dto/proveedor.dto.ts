import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProveedorDto{

    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsString()
    @IsNotEmpty()
    proveedor: string;

    @IsString()
    @IsNotEmpty()
    user_id: number;

    @IsDate()
    @IsOptional()
    created_at: Date;
}
