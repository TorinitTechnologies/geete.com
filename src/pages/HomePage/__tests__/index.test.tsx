import { render, screen } from '@testing-library/react';
import HomePage from '../index';

describe('HomePage', () => {
	it('HomePage should render', async () => {
		render(<HomePage />);
		const homePage = await screen.findByTestId('home_page');
		expect(homePage).toBeInTheDocument();
	});
});
