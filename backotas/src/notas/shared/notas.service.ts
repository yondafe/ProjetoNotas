import { Notas } from './notas';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NotasService {

    constructor(@InjectModel('Notas') private readonly notasModel: Model<Notas>) {

    }

    async getAll() {
        return await this.notasModel.find().exec();
    }

    async getById(id: string) {
        return await this.notasModel.findById(id).exec();
    }

    async create(nota: Notas) {
        const createdNota = new this.notasModel(nota);
        return await createdNota.save();
    }

    async update(id: string, nota: Notas) {
        await this.notasModel.updateOne({ _id: id }, nota).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.notasModel.deleteOne({ _id: id}).exec();
    }
}
