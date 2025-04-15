import { Injectable } from '@nestjs/common';
import { createProductDto } from 'src/dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { createUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

   async findAll(){
        return await this.prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                createdAt: true,
            }
        })
    }

    async create(data:createUserDto){
     const hashPassword = await bcrypt.hashSync(data.password,10)
     
     await this.prisma.user.create({
        data:{
            name:data.name,
            email:data.email,
            password:hashPassword
        }
     })
     return{
        message:"cadastrado com sucesso !"
     }
     
    }

    async findOne(id:string){
        return this.prisma.user.findUnique({
            where: { id},
            select: {
              id: true,
              name: true,
              email: true,
              createdAt: true,
            },
          });
}

async findByEmail(email: string) {
    return this.prisma.user.findUnique({
        where: { email },
    });
}

async update(data: UpdateUserDto, id: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }
  async delete(id:string){
  const user=  await this.prisma.user.delete({
        where:{id}
    })
    return {
        message:"deletado com sucesso !",
        user

    }
  }
}  