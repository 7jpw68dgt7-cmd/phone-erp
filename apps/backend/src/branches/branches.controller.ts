import { Body, Controller, Get, Post } from '@nestjs/common';
import { BranchesService } from './branches.service';

@Controller('branches')
export class BranchesController {
  constructor(
    private readonly branchesService: BranchesService,
  ) {}

  @Post()
  create(
    @Body()
    body: {
      name: string;
      address?: string;
    },
  ) {
    return this.branchesService.create(body);
  }

  @Get()
  findAll() {
    return this.branchesService.findAll();
  }
}
