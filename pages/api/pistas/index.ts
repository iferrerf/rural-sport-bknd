import {getAllPistas, getPistaByName, getPistasByLugar} from '@/database/dbPistas';
import { IPista } from '@/interface';
import { NextApiRequest, NextApiResponse } from 'next';


type Data =
    | { message: string }
    | IPista[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getPistas(req, res);

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