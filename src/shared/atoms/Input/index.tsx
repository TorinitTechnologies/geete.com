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
		fullWidth,
		style,
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
				fullWidth={fullWidth}
				style={style}
			/>
			{error && (
				<Error id={'error'} dataTestId={errorDataTestId} text={error} />
			)}
		</>
	);
}

export default Input;
