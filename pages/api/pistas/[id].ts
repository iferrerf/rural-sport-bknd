import { db } from '@/database';
import { IPista } from '@/interface';
import { Pista } from '@/models';
import { isValidObjectId } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | IPista[]
    | IPista

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'DELETE':
            return deletePista(req, res);

        default:
            return res.status(400).json({ message: 'Bad Request' })
    }

}

const deletePista = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;

    if (!isValidObjectId(id)) {
        return res.status(404).json({ message: 'El id del producto no es válido' });
    }

    try {
        await db.connect();
        const pista = await Pista.findByIdAndDelete(id);

        if (!pista) {
            await db.disconnect();
            return res.status(404).json({ message: 'No se encontró ninguna pista con este Id: ' + id });
        }

        await db.disconnect();
        return res.status(200).json({ message: 'Pista eliminada correctamente' });

    } catch (error) {
        await db.disconnect();
        console.log(error);
        res.status(500).json({ message: 'Ocurrió un error al eliminar la pista' });
    }
}
