import { Body, Controller, Get, Post } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.salesService.create(body);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }
}