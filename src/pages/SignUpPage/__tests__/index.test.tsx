import { render, screen } from '@testing-library/react';
import SignUpPage from '..';

describe('SignUp Page Tests', () => {
	it('should render SignUp page', async () => {
		render(<SignUpPage />);
		const signUpElement = await screen.getByTestId('sign_up_page');
		expect(signUpElement).toBeInTheDocument();
	});
});
