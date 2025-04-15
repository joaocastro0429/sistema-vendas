import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSalesDto } from 'src/dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService:SalesService){}

    @Post()
    create(@Body() createSaleDto:CreateSalesDto){
        return this.salesService.create(createSaleDto)
    }

    @Get()
    findAll() {
      return this.salesService.findAll();
    }

    // relatorio 

    @Get('report')
    getReport() {
  return this.salesService.getsalesReport();
}
}
