import { NotasService } from './shared/notas.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Notas } from "./shared/notas";

@Controller('notas')
export class NotasController {

    constructor(
        private NotasService: NotasService
    ) {}

    @Get()
    async getAll() : Promise<Notas[]> {
        return this.NotasService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Notas> {
        return this.NotasService.getById(id);
    }

    @Post()
    async create(@Body() nota: Notas) : Promise<Notas> {
        return this.NotasService.create(nota);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() nota: Notas) : Promise <Notas> {
        return this.NotasService.update(id, nota);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.NotasService.delete(id);
    }

}
