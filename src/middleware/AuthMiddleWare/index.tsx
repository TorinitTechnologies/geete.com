import React from 'react';
import AppRoutes from '../../AppRoutes';
import AuthRoutes from '../../AuthRoutes';

function AuthMiddleWare(props: AuthMiddleWareProps) {
	const { isLoggedIn } = props;
	return isLoggedIn ? <AppRoutes /> : <AuthRoutes />;
}

export default AuthMiddleWare;
