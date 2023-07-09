import { StyledButton } from './styles';

function CustomButton(props: ButtonProps) {
	const { title, variant, text, onClick, dataTestId, id, name } = props;
	return (
		<StyledButton
			title={title}
			variant={variant}
			onClick={onClick}
			id={id}
			name={name}
			data-testid={dataTestId}
		>
			{text}
		</StyledButton>
	);
}

export default CustomButton;
