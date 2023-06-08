import { IPista } from "@/interface/pistas";
import {db} from './';
import Pista from "@/models/Pista";

// Devolvemos la pista con el id específico
export const getPistaByName = async (_id: string): Promise<IPista | null> => {

    await db.connect();
    const pista = await Pista.findById({ _id }).lean();
    await db.disconnect();

    if (!pista) {
        return null;
    }

    pista.images = pista.images.map( img => {
        return img.includes('http') ? img : `${ process.env.HOST_NAME}pistas/${img}`;
    });

    return JSON.parse(JSON.stringify(pista));
}


// Devolvemos todas las pistas del mismo lugar
export const getPistasByLugar = async (lugar: string): Promise<IPista[]> => {

    lugar = lugar.toString().toLowerCase();

    await db.connect();

    const pistas = await Pista.find({
        $text: { $search: lugar },
    })
        .select('-_id')
        .lean();

    await db.disconnect();

    const updatedPista = pistas.map( pista => {
        pista.images = pista.images.map( img => {
            return img.includes('http') ? img : `${ process.env.HOST_NAME}products/${img}`;
        });
        return pista;
    }); 

    return updatedPista;

}


// Devolvemos todas las pistas
export const getAllPistas = async (): Promise<IPista[]> => {

    await db.connect();

    const allPistas = await Pista.find().lean();

    await db.disconnect();

    const updatedPistas = allPistas.map( pista => {
        pista.images = pista.images.map( img => {
            return img.includes('http') ? img : `${ process.env.HOST_NAME}pistas/${img}`;
        });
        return pista;
    })  

    return JSON.parse(JSON.stringify(updatedPistas));

}