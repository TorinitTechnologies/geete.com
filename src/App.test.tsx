import { render } from '@testing-library/react';
import App from './App';
import { ReduxWrapper } from './testUtils';

test('renders learn react link', () => {
	render(
		<ReduxWrapper>
			<App />
		</ReduxWrapper>
	);
});
