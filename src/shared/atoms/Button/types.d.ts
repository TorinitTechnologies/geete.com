interface ButtonProps {
	title: string;
	variant: 'contained' | 'text' | 'outlined';
	text: string;
	onClick?: (
		event: React.MouseEvent<HTMLElement> | FormEvent<HTMLFormElement>
	) => void;
	dataTestId: string;
	id: string;
	name: string;
	sx?: SxProps<Theme>;
	fullWidth?: boolean;
	style?: React.CSSProperties;
}
