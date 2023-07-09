import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<div data-testid={'app_layout'}>
			AppLayout
			<Outlet />
		</div>
	);
}

export default AppLayout;
