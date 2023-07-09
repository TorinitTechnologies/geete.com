import { BrowserRouter, Route, Routes as BaseRoutes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';

function Routes() {
	return (
		<BrowserRouter>
			<BaseRoutes>
				<Route path="/" element={<SignInPage />} />
			</BaseRoutes>
		</BrowserRouter>
	);
}

export default Routes;
