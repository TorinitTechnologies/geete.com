import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import AppLayout from '@layouts/AppLayout';
import RouteNotFoundPage from '@pages/RouteNotFoundPage';
function AppRoutes() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="*" element={<RouteNotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
