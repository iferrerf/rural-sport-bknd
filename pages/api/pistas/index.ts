import { db } from '@/database';
import { getAllPistas } from '@/database/dbPistas';
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
        case 'GET':
            return getPistas(req, res);
        case 'POST':
            return createPista(req, res);
        case 'PUT':
            return updatePista(req, res);

        default:
            return res.status(400).json({ message: 'Bad Request' })
    }

}

const getPistas = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    try {
        const pistas = await getAllPistas();
        console.log(pistas);
        res.status(200).json(pistas);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: 'Ocurrió un error al obtener las pistas: \n' + error });
    }
}

const createPista = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const pista = req.body as IPista;
    
    try {
        await db.connect(); 
        const newPista = new Pista({ pista });
        await newPista.save();
        await db.disconnect();

        return res.status(201).json(newPista);

    } catch (error: any) {
        await db.disconnect();
        console.log(error);
        res.status(400).json({
            message: error.message || 'Revise logs del servidor'
        })
    }
}
const updatePista = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { _id = '' } = req.body as IPista;

    if (!isValidObjectId(_id)) {
        return res.status(404).json({ message: 'El id del producto no es válido' });
    }

    try {
        await db.connect();
        const pista = await Pista.findById(_id);

        if (!pista) {
            await db.disconnect();
            return res.status(404).json({ message: 'No se encontró la pista con ese Id' });
        }

        await pista.updateOne(req.body);
        await db.disconnect();

        return res.status(200).json(pista);

    } catch (error) {

    }


}

