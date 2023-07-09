import { Routes as BaseRoutes, BrowserRouter, Route } from 'react-router-dom';
import AuthMiddleWare from './middleware/AuthMiddleWare';

function Routes() {
	return (
		<BrowserRouter>
			<BaseRoutes>
				<Route path="/" element={<AuthMiddleWare isLoggedIn={true} />} />
			</BaseRoutes>
		</BrowserRouter>
	);
}

export default Routes;
