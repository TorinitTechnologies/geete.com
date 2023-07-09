import React from 'react';
import { Provider } from 'react-redux';

import store from '@store/index';

interface WrapReduxProps {
	children: React.ReactNode;
}

export const WrapRedux = (props: WrapReduxProps) => {
	return <Provider store={store}>{props.children}</Provider>;
};
