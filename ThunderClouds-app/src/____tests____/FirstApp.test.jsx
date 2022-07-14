import { render } from '@testing-library/react'
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    /* test("it has match with the snapshot", () => {
        const title = 'Hola Soy Dami';
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    }); */
    test('debe mostrar una título en un h1', () => {
        const title = 'Hola Soy Ardan';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title); */

        expect(getByTestId('test-title').innerHTML).toContain(title);

    });
    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Ilay';
        const subTitle = 'Sil escribiendo el subtitulo'
        const { getAllByText } = render(<FirstApp
            title={title}
            subTitle={subTitle}
        />);
        /* expect(getAllByText(subTitle)).toBeTruthy*/
        expect(getAllByText(subTitle).length).toBe(2)
    });
});
