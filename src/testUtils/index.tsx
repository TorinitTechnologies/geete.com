import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes as BaseRoutes } from 'react-router-dom';

import store from '@store/index';

interface WrapperProps {
	children: React.ReactNode;
}

export const ReduxWrapper = (props: WrapperProps) => {
	return <Provider store={store}>{props.children}</Provider>;
};

export const RouteWrapper = (props: WrapperProps) => {
	return (
		<BrowserRouter>
			<BaseRoutes>{props.children}</BaseRoutes>
		</BrowserRouter>
	);
};
