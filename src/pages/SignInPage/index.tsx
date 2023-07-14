import Input from '@atoms/Input';
import Button from '@atoms/Button';
import { useState } from 'react';

function SignInPage() {
	const [credentials, setCredentials] = useState<SignInFields>({
		email: null,
		password: null,
	});
	const [errors, setErrors] = useState<SignInFields>({
		email: null,
		password: null,
	});

	const onLogin = () => {
		if (!credentials.email) {
			setErrors({ ...errors, email: 'Please enter email' });
		}
	};

	const onFieldChange = (e: any) => {
		const { value, id } = e.target;
		setCredentials({ ...credentials, [id]: value });
	};

	return (
		<div data-testid={'sign_in_page'}>
			<Input
				id={'email'}
				name={'email'}
				label={'Enter Email'}
				dataTestId={'email'}
				variant={'outlined'}
				errorDataTestId={'email_error'}
				error={errors.email || ''}
				onChange={onFieldChange}
			/>
			<Input
				id={'password'}
				name={'password'}
				label={'Enter Password'}
				dataTestId={'password'}
				variant={'outlined'}
				type={'password'}
				onChange={onFieldChange}
			/>
			<Button
				id={'login'}
				name={'login'}
				dataTestId={'login_button'}
				variant={'contained'}
				title={'Login'}
				text={'Login'}
				onClick={onLogin}
			/>
		</div>
	);
}

export default SignInPage;
