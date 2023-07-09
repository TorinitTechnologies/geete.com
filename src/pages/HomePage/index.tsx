import React from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
	return (
		<div data-testid={'home_page'}>
			HomePage
			<Outlet />
		</div>
	);
}

export default HomePage;
