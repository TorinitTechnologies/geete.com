import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { ReduxWrapper, RouteWrapper } from '@testUtils/index';
import AuthMiddleWare from '../index';

describe('AuthMiddleWare', () => {
	it('AuthMiddleWare auth_layout should render', async () => {
		render(
			<ReduxWrapper>
				<RouteWrapper>
					<Route path="/" element={<AuthMiddleWare isLoggedIn={false} />} />
				</RouteWrapper>
			</ReduxWrapper>
		);
		const authLayout = await screen.findByTestId('auth_layout');
		expect(authLayout).toBeInTheDocument();
	});

	it('AuthMiddleWare app_layout should render', async () => {
		render(
			<ReduxWrapper>
				<RouteWrapper>
					<Route path="/" element={<AuthMiddleWare isLoggedIn={true} />} />
				</RouteWrapper>
			</ReduxWrapper>
		);
		const authLayout = await screen.findByTestId('app_layout');
		expect(authLayout).toBeInTheDocument();
	});
});
