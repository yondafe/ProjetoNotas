import { Document } from "mongoose";

export class Notas extends Document {
    descricao: String;
    completado: Boolean;
}
