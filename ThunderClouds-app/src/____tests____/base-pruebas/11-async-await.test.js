import { getImagen } from "../../base-de-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar una imagen', async () => {
        const resp = await getImagen();
        //console.log(url);
        //expect(typeof url).toBe('string')
        expect(resp).toBe('No se encontro la imagen');
    });
});
