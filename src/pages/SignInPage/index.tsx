import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Button from '@atoms/Button';
import Input from '@atoms/Input';

import { makeUserLoggedIn } from '@utils/authUtils/index';
import { getLoginSchema } from './helper';

function SignInPage() {
	const navigate = useNavigate();
	const onLogin = () => {
		makeUserLoggedIn();
		navigate('/');
	};

	const loginSchema = getLoginSchema();

	const formik = useFormik({
		validationSchema: loginSchema,
		initialValues: { email: null, password: null },
		onSubmit: onLogin,
	});

	const { errors, handleChange, touched, handleSubmit } = formik;

	return (
		<div data-testid={'sign_in_page'}>
			<Input
				id={'email'}
				name={'email'}
				label={'Enter Email'}
				dataTestId={'email'}
				variant={'outlined'}
				errorDataTestId={'email_error'}
				error={(touched.email && errors.email) || ''}
				onChange={handleChange}
			/>
			<Input
				id={'password'}
				name={'password'}
				label={'Enter Password'}
				dataTestId={'password'}
				variant={'outlined'}
				type={'password'}
				onChange={handleChange}
				errorDataTestId={'password_error'}
				error={(touched.password && errors.password) || ''}
			/>
			<Button
				id={'login'}
				name={'login'}
				dataTestId={'login_button'}
				variant={'contained'}
				title={'Login'}
				text={'Login'}
				onClick={handleSubmit}
			/>
		</div>
	);
}

export default SignInPage;
