import { render } from '@testing-library/react';
import App from './App';
import { WrapRedux } from './testUtils';

test('renders learn react link', () => {
	render(
		<WrapRedux>
			<App />
		</WrapRedux>
	);
});
