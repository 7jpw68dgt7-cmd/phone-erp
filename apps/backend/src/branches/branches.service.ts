import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BranchesService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    address?: string;
  }) {
    return this.prisma.branch.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.branch.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}