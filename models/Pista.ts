import { IPista } from '@/interface';
import mongoose, { Schema, model, Model } from 'mongoose';

const pistaSchema = new Schema({
    nombre: { type: String, required: true, default: '' },
    lugar: { type: String, required: true, default: '' },
    temporada: { type: String, required: true, default: 'Todo el año' },
    horario: { type: String, required: true, default: '' },
    images: [{ type: String, required: true, default: '' }],
    añoConstruccion: { type: String, required: true, default: '' },
    estado: { type: String, required: true, default: 'Bueno' },
    descripcion:  { type: String, required: true, default: '' },

}, {
    timestamps: true,
});

const Pista: Model<IPista> = mongoose.models.Pista || model('Pista', pistaSchema);

export default Pista;