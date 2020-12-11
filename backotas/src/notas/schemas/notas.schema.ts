import * as mongoose from 'mongoose';

export const NotasSchema = new mongoose.Schema({
    descricao: String,
    completado: Boolean
})