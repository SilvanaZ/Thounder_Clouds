import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por Id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });
    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });
    test('getHeroeByOwner debe retornar heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes)
        
    });
})
