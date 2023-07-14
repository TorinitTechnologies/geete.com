import * as Yup from 'yup';

export const getLoginSchema = () => {
	const schema = Yup.object({
		email: Yup.string()
			.email('Please enter valid email')
			.required('Email id is required'),
		password: Yup.string().required('Password is required'),
	});
	return schema;
};
