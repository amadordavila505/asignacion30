import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsDate()
    @IsOptional()
    created_at: Date;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;
}
