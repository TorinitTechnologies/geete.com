import { Routes as BaseRoutes, BrowserRouter, Route } from 'react-router-dom';
import AuthMiddleWare from './middleware/AuthMiddleWare';

function Routes() {
	return (
		<BrowserRouter>
			<BaseRoutes>
				<Route path="/" element={<AuthMiddleWare isLoggedIn={false} />} />
			</BaseRoutes>
		</BrowserRouter>
	);
}

export default Routes;
