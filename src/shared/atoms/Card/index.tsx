import CardContent from '@mui/material/CardContent';
import { StyledCard } from './styles';

function CustomCard(props: CardProps) {
	const { dataTestId, children } = props;
	return (
		<StyledCard data-testid={dataTestId}>
			<CardContent>{children}</CardContent>
		</StyledCard>
	);
}

export default CustomCard;
