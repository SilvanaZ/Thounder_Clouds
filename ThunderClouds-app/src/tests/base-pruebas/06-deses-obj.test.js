import { usContext } from '../../base-pruebas/06-deses-obj';


describe('Pruebas en 06-deses-obj', () => {
    test('usContext deberia retornar un array', () => {
        const testClave = {
            nombreClave: clave,
            anios: edad,
        }

        const claves = usContext();

        expect(testClave).toEqual(claves)
    });
});
