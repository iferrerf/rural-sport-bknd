interface SeedPista {
    nombre: string;
    lugar: string;
    images: string[];
    descripcion: string;
    temporada: ValidTemporada;
    horario: string;
}

type ValidTemporada = "Todo el año" | "Solo invierno" | "De junio a septiembre";

interface SeedData {
    pistas: SeedPista[];
}

export const initialData: SeedData = {
    pistas: [
    {
        nombre: 'Pista de pádel',
        lugar: 'Mirambel',
        images: [
            'https://estaticos-cdn.sport.es/clip/06d09b0b-a9a3-4328-838b-a49ce536de82_alta-libre-aspect-ratio_default_0.jpg',
            'https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2019/10/fabrica-de-pistas-de-padel.jpg',
        ],
        descripcion: 'Pista al aire libre en muy buen estado, situada a las afueras, a escasos 400m de la localidad de Mirambel. Ubicada junto a la piscina municipal y el campo de multideporte.',
        temporada: 'Todo el año',
        horario: '8:00 - 22:00',
    },
    {
        nombre: 'Pista de pádel',
        lugar: 'Iglesuela del Cid',
        images: [
            'https://as01.epimg.net/masdeporte/imagenes/2020/05/11/polideportivo/1589206126_472503_1589206640_noticia_normal.jpg',
            'https://www.elbierzodigital.com/wp-content/uploads/2022/05/PADEL2.jpg',
        ],
        descripcion: 'Zona al aire libre, bien cuidada, situada en un extremo de la localidad, en la salida hacia la ermita del Cid. Ubicada junto un campo de fútbol y un frontón.',
        temporada: 'Todo el año',
        horario: '8:00 - 22:00',
    },
    {
        nombre: 'Pista de tenis',
        lugar: 'Cantavieja',
        images: [
            'https://www.sportbs.es/wp-content/uploads/2020/10/7-3.jpeg',
            'https://www.sportbs.es/wp-content/uploads/2020/10/10-1.jpeg',
        ],
        descripcion: 'Situada junto al recinto escolar, compartiendo acceso con la pista de frontón. Ubicada a un paso de la piscina municipal. Se han hecho arreglos de mejora de las instalaciones.',
        temporada: 'Todo el año',
        horario: 'Sin horario establecido',
    },
    {
        nombre: 'Pabellón polideportivo',
        lugar: 'Cantavieja',
        images: [
            'https://www.lacomarca.net/wp-content/uploads/2022/07/IMG_3971.jpg',
            'https://www.parquetsnervion.es/wp-content/uploads/2021/12/pista-acabada.jpg',
        ],
        descripcion: 'Espacio nuevo que ocupa la sede de juegos deportivos de la comarca del Maestrazgo. Recién recontruido, cuenta con nuevas gradas, vestuarios y suelo de goma. Ubicado en la avenida principal del pueblo, frente al cuartel de la Guardia Civil.',
        temporada: 'Todo el año',
        horario: 'Disponible fuera del horario de actividades extraescolares',
    },
    {
        nombre: 'Pabellón polideportivo',
        lugar: 'Iglesuela del Cid',
        images: [
            'https://catsports.net/wp-content/uploads/2018/04/AIGUAJOC_8785.jpg',
            'https://catsports.net/wp-content/uploads/2018/04/AIGUAJOC_8765.jpg',
        ],
        descripcion: 'Espacio de multideporte ubicado en el alto del pueblo en la salida hacia Cantavieja. Ubicado junto a la piscina municipal.  ',
        temporada: 'Todo el año',
        horario: 'Disponible fuera del horario de actividades extraescolares',
    },

],}