import { CounterApp } from "../CounterApp";
import { fireEvent, render, screen } from '@testing-library/react'

describe('Pruebas en CounterApp', () => {
    const initialValue = 10;
    test("tiene que coincidir con el snapshot", () => {

        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();

    });
    test('debe mostrar valor inicial de 100 <CounterApp value={100} />', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

        //expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    });
    test('debe incrementar con el boton +1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('debe decrementar con el boton -1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('debe reiniciar conteo con el boton reset', () => {

        render(<CounterApp value={365} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(365)).toBeTruthy();

        //expect(screen.getByText(365)).toBeTruthy();
    });
});
