import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Button from '@atoms/Button';
import Input from '@atoms/Input';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { makeUserLoggedIn } from '@utils/authUtils/index';

import { getLoginSchema } from './helper';
import { LoginContainer } from './style';

const SignInPage = () => {
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
		<LoginContainer data-testid={'sign_in_page'}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							'url(https://source.unsplash.com/random?wallpapers)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
							style={{ width: '100%' }}
						>
							<Input
								id={'email'}
								name={'email'}
								label={'Enter Email'}
								dataTestId={'email'}
								variant={'outlined'}
								errorDataTestId={'email_error'}
								error={(touched.email && errors.email) || ''}
								onChange={handleChange}
								fullWidth
								style={{ marginTop: 10 }}
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
								fullWidth
								style={{ marginTop: 10 }}
							/>
							<Button
								id={'login'}
								name={'login'}
								dataTestId={'login_button'}
								variant={'contained'}
								title={'Login'}
								text={'Login'}
								onClick={handleSubmit}
								sx={{ mt: 3, mb: 2 }}
								fullWidth
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</LoginContainer>
	);
};

export default SignInPage;
