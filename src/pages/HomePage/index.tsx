import Button from '@atoms/Button';
import { makeUserLoggedOut } from '@utils/authUtils';

function HomePage() {
	const onLogout = () => {
		makeUserLoggedOut();
	};

	return (
		<div data-testid={'home_page'}>
			<Button
				id={'logout'}
				name={'logout'}
				dataTestId={'log_out_btn'}
				title={'Logout'}
				text={'Logout'}
				variant={'outlined'}
				onClick={onLogout}
			/>
		</div>
	);
}

export default HomePage;
