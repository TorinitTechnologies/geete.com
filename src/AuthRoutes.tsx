import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInPage from '@pages/SignInPage';
import AuthLayout from '@layouts/AuthLayout';
import SignUpPage from '@pages/SignUpPage';
import RouteNotFoundPage from '@pages/RouteNotFoundPage';

function AuthRoutes() {
	return (
		<Routes data-testid={'auth_routes'}>
			<Route element={<AuthLayout />}>
				<Route index element={<SignInPage />} />
				<Route path="/sign_up" element={<SignUpPage />} />
				<Route path="*" element={<RouteNotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default AuthRoutes;
