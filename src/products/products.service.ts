import { Injectable } from '@nestjs/common';
import { createProductDto } from 'src/dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma:PrismaService){}

    async findAll(){
        return this.prisma.product.findMany()
    }

    async create(createProductDto:createProductDto){
        const product = await this.prisma.product.create({
            data:{
                name:createProductDto.name,
                description:createProductDto.description,
                price:createProductDto.price
            }
        })

        return {
            message:"produto cadastrado com sucesso !"
        }
    }

   async findOne(id:string){
        const product= await this.prisma.product.findFirst({
            where:{id}
        })
        if(!product){
            throw new Error("product not found")
        }

        return {
            
            dados:product
        }
    }

  async update(id:string , data:createProductDto){
        const product= await this.prisma.product.findUnique({
            where:{id}
        })

        if (!product) {
            throw new Error('Produto não encontrado');
        }

        const productUpdate = await this.prisma.product.update({
            where:{id},
            data:{
                name:data.name,
                description:data.description,
                price:data.price
            }

           
        })
        return {
            message:"produto atualizado  com sucesso !",
            dados:productUpdate
        }
    }

    async delete(id:string){
        const product= await this.prisma.product.findUnique({
            where:{id}
        })

        await this.prisma.product.delete({
            where:{id}
        })



        return {
            message:"produto deletado",
            product
        }
    }
}
