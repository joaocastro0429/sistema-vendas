import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDto } from 'src/dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){}

    @Get()
    findAll(){
        return this.productService.findAll()
    }

    @Post()
    create(@Body()data:createProductDto){
        return this.productService.create(data)
    }

    @Get(":id")
    findOne(@Param('id')id:string){
        return this.productService.findOne(id)
    }

    @Put(":id")
    update(@Param('id')id:string , @Body()data:createProductDto){
        return this.productService.update(id,data)
    }

    @Delete(":id")
    delete(@Param('id')id:string){
        return this.productService.delete(id)

    }
}
