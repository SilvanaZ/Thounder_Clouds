import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {

    test("getHeroeById debe de retornar un heroe por ID", () => {

        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);
    });
    test("getHeroeByOwner debe de retornar unos heroes", () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe))
    });

});
