
describe('Pruebas en <DemoComponent>', () => {

    test('Esta prueba, no debería fallar', () => {
        //1.Inizialización
        const message1 = 'Hola Mundo';
        //2.Estimulo
        const message2 = message1.trim();
        //3.Observar comportamiento
        expect(message1).toBe(message2)
    });
});
