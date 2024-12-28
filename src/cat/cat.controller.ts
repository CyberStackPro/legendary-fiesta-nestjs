import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private catsService: CatService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  findAll(@Query() query: any) {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne() {
    this.catsService.findOne();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    this.catsService.update(+id, updateCatDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.catsService.remove(+id);
  }
}
