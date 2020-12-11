import { NotasController } from './notas/notas.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasService } from './notas/shared/notas.service';
import { NotasModule } from './notas/notas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@projetos.glbqu.mongodb.net/<dbname>?retryWrites=true&w=majority'),
    NotasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
