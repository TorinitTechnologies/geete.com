import { fireEvent, render, screen } from '@testing-library/react';
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
	it('should have log out button', async () => {
		render(<HomePage />);
		const logOutButton = await screen.findByTestId('log_out_btn');
		expect(logOutButton).toBeInTheDocument();
	});
	it('should have log out button', async () => {
		render(<HomePage />);
		const logOutButton = await screen.findByTestId('log_out_btn');
		fireEvent.click(logOutButton);
	});
});
