import { NotasSchema } from './schemas/notas.schema';
import { NotasService } from './shared/notas.service';
import { NotasController } from './notas.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Notas', schema: NotasSchema}])],
    controllers: [NotasController],
    providers: [NotasService]
})
export class NotasModule {}
