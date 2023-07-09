import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import AuthLayout from './layouts/AuthLayout';

function AuthRoutes() {
	return (
		<Routes data-testid={'auth_routes'}>
			<Route element={<AuthLayout />}>
				<Route index element={<SignInPage />} />
			</Route>
		</Routes>
	);
}

export default AuthRoutes;
