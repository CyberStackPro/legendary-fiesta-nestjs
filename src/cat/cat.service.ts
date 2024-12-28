import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(): string {
    return 'This action returns a #${id} cat';
  }

  update(id: number, updateCatDto: any) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
