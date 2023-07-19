import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
	return (
		<div data-testid={'auth_layout'}>
			<Outlet />
		</div>
	);
}

export default AuthLayout;
