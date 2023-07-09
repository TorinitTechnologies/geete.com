import { render, screen } from '@testing-library/react';
import { Routes as BaseRoutes, BrowserRouter, Route } from 'react-router-dom';

import AuthMiddleWare from '../index';

describe('AuthMiddleWare', () => {
	it('AuthMiddleWare should render', async () => {
		render(
			<BrowserRouter>
				<BaseRoutes>
					<Route path="/" element={<AuthMiddleWare isLoggedIn={false} />} />
				</BaseRoutes>
			</BrowserRouter>
		);
		const authLayout = await screen.findByTestId('auth_layout');
		expect(authLayout).toBeInTheDocument();
	});
});
