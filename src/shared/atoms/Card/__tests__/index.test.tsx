import { render, screen } from '@testing-library/react';
import Card from '../index';

describe('Card', () => {
	it('card should render', async () => {
		render(<Card dataTestId={'card'} />);
		const btn = await screen.findByTestId('card');
		expect(btn).toBeInTheDocument();
	});
});
