const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SignInPage from '../index';

describe('SignInPage', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<SignInPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('SignInPage should render', async () => {
		render(<SignInPage />);
		const signInPage = await screen.findByTestId('sign_in_page');
		expect(signInPage).toBeInTheDocument();
	});

	it('should have enter email text field', async () => {
		render(<SignInPage />);
		const emailField = await screen.findByTestId('email');
		expect(emailField).toBeInTheDocument();
	});

	it('should have enter password text field', async () => {
		render(<SignInPage />);
		const passwordField = (await screen.findByTestId(
			'password'
		)) as HTMLElement;
		expect(passwordField).toBeInTheDocument();
	});

	it('should have login button', async () => {
		render(<SignInPage />);
		const loginButton = await screen.findByTestId('login_button');
		expect(loginButton).toBeInTheDocument();
	});

	it('should show enter email validation message', async () => {
		render(<SignInPage />);
		const loginButton = await screen.findByTestId('login_button');
		await fireEvent.click(loginButton);
		const errorMessage = await screen.findByTestId('email_error');
		expect(errorMessage).toBeInTheDocument();
	});

	it('should not show enter email validation message', async () => {
		render(<SignInPage />);
		const emailField = await screen.getByTestId('email').querySelector('input');
		const loginButton = await screen.findByTestId('login_button');
		if (emailField) {
			fireEvent.change(emailField, { target: { value: 'test@t.ca' } });
			fireEvent.click(loginButton);
			const errorMessage = await screen.queryByTestId('email_error');
			expect(errorMessage).toBeFalsy();
		}
	});

	it('should show enter password validation message', async () => {
		render(<SignInPage />);
		const loginButton = await screen.findByTestId('login_button');
		await fireEvent.click(loginButton);
		const errorMessage = await screen.findByTestId('password_error');
		expect(errorMessage).toBeInTheDocument();
	});
});
