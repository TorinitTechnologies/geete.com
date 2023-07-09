import { render, screen } from '@testing-library/react';
import AppLayout from '../index';

describe('AppLayout', () => {
	it('AppLayout should render', async () => {
		render(<AppLayout />);
		const appLayout = await screen.findByTestId('app_layout');
		expect(appLayout).toBeInTheDocument();
	});
});
