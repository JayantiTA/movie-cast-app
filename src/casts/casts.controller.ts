import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CastsService } from './casts.service';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';

@Controller('casts')
export class CastsController {
  constructor(private readonly castsService: CastsService) {}

  @Get()
  async getCasts() {
    return await this.castsService.getCasts();
  }

  @Get(':id')
  async getCastById(@Param() params) {
    return await this.castsService.getCastById(params.id);
  }

  @Post()
  async createCast(@Body() createCastDto: CreateCastDto) {
    return await this.castsService.createCast(createCastDto);
  }

  @Put(':id')
  async updateCast(@Param() params, @Body() updateCastDto: UpdateCastDto) {
    return await this.castsService.updateCast(params.id, updateCastDto);
  }

  @Delete(':id')
  async deleteCast(@Param() params) {
    return await this.castsService.deleteCast(params.id);
  }
}
