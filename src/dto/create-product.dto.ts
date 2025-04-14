import { IsNumber, IsString } from "class-validator"



export class createProductDto{
    @IsString()
    name:string

    @IsString()
    description:string
    
    @IsNumber()
    price:number
}