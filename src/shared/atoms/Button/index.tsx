import { StyledButton } from './styles';

function CustomButton(props: ButtonProps) {
	const {
		title,
		variant,
		text,
		onClick,
		dataTestId,
		id,
		name,
		sx,
		fullWidth,
		style,
	} = props;
	return (
		<StyledButton
			title={title}
			variant={variant}
			onClick={onClick}
			id={id}
			name={name}
			data-testid={dataTestId}
			sx={sx}
			fullWidth={fullWidth}
			style={style}
		>
			{text}
		</StyledButton>
	);
}

export default CustomButton;
