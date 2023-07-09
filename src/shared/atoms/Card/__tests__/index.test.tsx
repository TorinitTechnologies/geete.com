import { render, screen } from '@testing-library/react';
import Card from '../index';

describe('Card', () => {
	it('card should render', async () => {
		const childElement = <div>Sample Card</div>;
		render(<Card dataTestId={'card'} children={childElement} />);
		const btn = await screen.findByTestId('card');
		expect(btn).toBeInTheDocument();
	});
});
