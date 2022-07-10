import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", (done) => {
    test("getHeroeByAsync debe de retornar un heroe", () => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });
});
