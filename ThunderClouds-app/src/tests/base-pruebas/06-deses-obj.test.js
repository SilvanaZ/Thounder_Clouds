import { usContext } from '../../base-pruebas/06-deses-obj';


describe('Pruebas en 06-deses-obj', () => {
    test('usContext deberia retornar un array', () => {
        const test1 = {
            nombre: clave,
            anios: edad,
        }

        const test2 = usContext();

        expect(test1).toEqual(test2)
    });
});
