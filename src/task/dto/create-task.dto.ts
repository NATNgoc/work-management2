import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Length,
  MaxLength,
  Validate,
} from 'class-validator';
import { DueDateGreaterThanCurrentDate } from '../validation/due-date.validation';

export class CreateTaskDto {
  @IsUUID()
  @IsNotEmpty()
  workSpaceId: string;

  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @Length(10, 255)
  description: string;

  @IsDateString()
  @Validate(DueDateGreaterThanCurrentDate)
  dueDate: Date;
}
