declare interface InputProps {
	id: string;
	name: string;
	label: string;
	variant: 'outlined' | 'filled' | 'standard';
	dataTestId: string;
	type?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputProps?: any;
	error?: string;
	errorDataTestId?: string;
	onChange: (e: React.ChangeEvent<HTMLElement>) => void;
	fullWidth?: boolean;
	style?: React.CSSProperties;
}
