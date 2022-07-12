import { render } from '@testing-library/react'
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    test("it've match with the snapshot", () => {
        const title = 'Hola Soy Dami';
        render(<FirstApp title={title} />)
    });
})
