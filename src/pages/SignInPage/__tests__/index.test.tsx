import { render, screen } from '@testing-library/react';
import SignInPage from '../index';

describe('SignInPage', () => {
	it('SignInPage should render', async () => {
		render(<SignInPage />);
		const signInPage = await screen.findByTestId('sign_in_page');
		expect(signInPage).toBeInTheDocument();
	});
});
