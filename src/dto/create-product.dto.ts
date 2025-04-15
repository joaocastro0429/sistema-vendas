import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"



export class createProductDto{
    @IsString()
    @ApiProperty()
    
    name:string

    @IsString()
    @ApiProperty()
    
    description:string
    
    @IsNumber()
    @ApiProperty()
    
    price:number
}