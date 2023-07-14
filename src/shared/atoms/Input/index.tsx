import Error from '@atoms/Error';
import { StyledTextField } from './styles';

function Input(props: InputProps) {
	const {
		id,
		name,
		label,
		variant,
		dataTestId,
		type,
		inputProps,
		error,
		errorDataTestId,
		onChange,
	} = props;
	return (
		<>
			<StyledTextField
				id={id}
				name={name}
				label={label}
				variant={variant}
				data-testid={dataTestId}
				type={type}
				inputProps={inputProps}
				error={!!error}
				onChange={onChange}
			/>
			{error && (
				<Error id={'error'} dataTestId={errorDataTestId} text={error} />
			)}
		</>
	);
}

export default Input;
