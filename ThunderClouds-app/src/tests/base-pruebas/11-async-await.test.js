import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar una imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')
    });
});
