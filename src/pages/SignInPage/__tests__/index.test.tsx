import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { userEvent } from '@storybook/testing-library';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SignInPage from '../index';
import { ReduxWrapper } from '@testUtils/index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	...(jest.requireActual('react-router-dom') as any),

	useNavigate: () => mockedUsedNavigate,
}));

describe('SignInPage', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<ReduxWrapper>
						<SignInPage />
					</ReduxWrapper>
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('SignInPage should render', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const signInPage = await screen.findByTestId('sign_in_page');
		expect(signInPage).toBeInTheDocument();
	});

	it('should have enter email text field', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const emailField = await screen.findByTestId('email');
		expect(emailField).toBeInTheDocument();
	});

	it('should have enter password text field', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const passwordField = (await screen.findByTestId(
			'password'
		)) as HTMLElement;
		expect(passwordField).toBeInTheDocument();
	});

	it('should have login button', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const loginButton = await screen.findByTestId('login_button');
		expect(loginButton).toBeInTheDocument();
	});

	it('should show enter email validation message', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const loginButton = await screen.findByTestId('login_button');
		await fireEvent.click(loginButton);
		const errorMessage = await screen.findByTestId('email_error');
		expect(errorMessage).toBeInTheDocument();
	});

	it('should not show enter email validation message', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const emailField = await screen.getByTestId('email').querySelector('input');
		const loginButton = await screen.findByTestId('login_button');
		if (emailField) {
			await fireEvent.change(emailField, { target: { value: 'test@t.ca' } });
			await fireEvent.click(loginButton);

			const errorMessage = await screen.queryByTestId('email_error');
			expect(errorMessage).toBeFalsy();
		}
	});

	it('should show enter password validation message', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const loginButton = await screen.findByTestId('login_button');

		await fireEvent.click(loginButton);

		const errorMessage = await screen.findByTestId('password_error');
		expect(errorMessage).toBeInTheDocument();
	});

	it('should navigate to home page on submit', async () => {
		render(
			<BrowserRouter>
				<ReduxWrapper>
					<SignInPage />
				</ReduxWrapper>
			</BrowserRouter>
		);
		const loginButton = await screen.findByTestId('login_button');
		const emailField = await screen.getByTestId('email').querySelector('input');
		const passwordField = await screen
			.getByTestId('password')
			.querySelector('input');
		if (emailField && passwordField) {
			await fireEvent.change(emailField, { target: { value: 'test@t.ca' } });
			await fireEvent.change(passwordField, { target: { value: 'password' } });
			await userEvent.click(loginButton);
			await waitFor(() => expect(mockedUsedNavigate).toBeCalledWith('/'));
		}
	});
});
