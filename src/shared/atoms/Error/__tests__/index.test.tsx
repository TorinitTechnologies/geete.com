import { render, screen } from '@testing-library/react';
import Error from '../index';

describe('Error', () => {
	it('error should render', async () => {
		render(<Error id={'error'} dataTestId={'error'} text={'Error'} />);
		const btn = await screen.findByTestId('error');
		expect(btn).toBeInTheDocument();
		expect(btn).toHaveTextContent('Error');
	});
});
