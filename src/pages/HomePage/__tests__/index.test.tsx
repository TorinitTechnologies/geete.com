import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from '../index';

describe('HomePage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<HomePage />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('HomePage should render', async () => {
		render(<HomePage />);
		const homePage = await screen.findByTestId('home_page');
		expect(homePage).toBeInTheDocument();
	});
});
