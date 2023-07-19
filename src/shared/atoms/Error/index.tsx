import React from 'react';
import { FormHelperText } from '@mui/material';

const Error = (props: ErrorProps) => {
	const { id, text, dataTestId } = props;
	return (
		<>
			<FormHelperText
				data-testid={dataTestId}
				id={id}
				style={{ width: '100%', color: 'red' }}
			>
				{text}
			</FormHelperText>
		</>
	);
};

export default Error;
