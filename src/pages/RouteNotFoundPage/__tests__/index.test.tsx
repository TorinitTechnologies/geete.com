import { render, screen } from '@testing-library/react';
import RouteNotFoundPage from '..';

describe('Page Not Found Tests', () => {
	it('should render Page Not Found page', async () => {
		render(<RouteNotFoundPage />);
		const pageNotFoundElement = await screen.getByTestId('page_not_found');
		expect(pageNotFoundElement).toBeInTheDocument();
	});
});
