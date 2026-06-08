import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    branchId: string;
    imei: string;
    brand: string;
    model: string;
    storage?: string;
    color?: string;
    purchasePrice: number;
    salePrice: number;
    status: string;
  }) {
    return this.prisma.device.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.device.findMany({
      include: {
        branch: true,
      },
    });
  }
}