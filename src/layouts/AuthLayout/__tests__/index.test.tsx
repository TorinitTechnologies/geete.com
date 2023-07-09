import { render, screen } from '@testing-library/react';
import AuthLayout from '../index';

describe('AuthLayout', () => {
	it('AuthLayout should render', async () => {
		render(<AuthLayout />);
		const appLayout = await screen.findByTestId('auth_layout');
		expect(appLayout).toBeInTheDocument();
	});
});
