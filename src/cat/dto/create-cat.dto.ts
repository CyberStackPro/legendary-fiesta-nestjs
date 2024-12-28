import { PartialType } from '@nestjs/mapped-types';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto extends PartialType(CreateCatDto) {}
