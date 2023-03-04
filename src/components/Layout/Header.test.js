import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import Cart from '../Cart/Cart';

describe('Header component', () => {
    const cartButtonText = 'Your Cart';

    test('renders "Your Cart" button', () => {
        render(<Header />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('renders "Your Cart" text', () => {
        render(<Header />);
        const buttonTextElement = screen.getByText(cartButtonText);
        expect(buttonTextElement).toBeInTheDocument();
      });
    //   test('opens shopping cart', () => {
    //     render(<Header />);
    //     const buttonElement = screen.getByRole('button');
    //     userEvent.click(buttonElement);
    //     const shoppingCartTitle = (/shopping cart/ig);
    //     const shoppingCartElement = screen.getByText(shoppingCartTitle);
    //     expect(shoppingCartElement).toBeInTheDocument();
    //   });      
});
