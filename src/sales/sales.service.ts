import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalesDto } from 'src/dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSalesDto) {
    const product = await this.prisma.product.findUnique({
        
      where: { 
        
        id: data.productId 
    }, // Corrigido aqui!
    
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return this.prisma.sale.create({
      data: {
        productId: data.productId,
        quantity: data.quantity,
      },
      include: {
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.sale.findMany({
      include: {
        product: true,
      },
    });
  }

//    gerar um relatorio 
   async getsalesReport(){
    const sales= await this.prisma.sale.findMany({
        include:{
               product:true 
        },
        orderBy: {
            createdAt: 'desc',
          },
    })
    // esta fazendo o mapeamento dos campos e fazendo o calculo da quantidade e preço 
    return sales.map((sale) => ({
        productName: sale.product.name,
        description: sale.product.description,
        unitPrice: sale.product.price,
        quantity: sale.quantity,
        total: sale.quantity * sale.product.price,
        soldAt: sale.createdAt,
      }));
   }
}
