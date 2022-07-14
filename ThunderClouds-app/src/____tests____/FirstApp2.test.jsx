import { render, screen } from '@testing-library/react'
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    const title = 'Hola, soy Pelufo';

    test('it must make mach with the snapshot', () => {

        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar un mensaje "Hola, soy Pelufo"', () => {

        render(<FirstApp title={title} />)
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('debe mostrar el titulo en h1', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)

    });
    test('debe mostrar subtitulo enviado por props', () => {

        render(<FirstApp title={title} />);

    });

});
