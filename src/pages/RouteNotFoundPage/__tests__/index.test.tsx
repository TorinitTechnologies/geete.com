import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RouteNotFoundPage from '..';

describe('Page Not Found Tests', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<RouteNotFoundPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render Page Not Found page', async () => {
		render(<RouteNotFoundPage />);
		const pageNotFoundElement = await screen.getByTestId('page_not_found');
		expect(pageNotFoundElement).toBeInTheDocument();
	});
});
