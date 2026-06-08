import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    deviceId: string;
    salePrice: number;
  }) {
    const sale = await this.prisma.sale.create({
      data,
    });

    await this.prisma.device.update({
      where: {
        id: data.deviceId,
      },
      data: {
        status: 'Sold',
      },
    });

    return sale;
  }

  async findAll() {
    return this.prisma.sale.findMany({
      include: {
        device: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}