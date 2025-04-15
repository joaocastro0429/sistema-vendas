import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsUUID, Min } from "class-validator"

export class CreateSalesDto{
    @IsUUID()
    @ApiProperty()

    productId:string
    
    @IsInt()
    @Min(1)
    @ApiProperty()

    quantity:number
}