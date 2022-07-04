import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Ro"', () => {
        const name = 'Rocío';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}!!!`);
    });
});
