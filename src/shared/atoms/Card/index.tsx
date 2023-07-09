import CardContent from '@mui/material/CardContent';
import { StyledCard } from './styles';

function CustomCard(props: CardProps) {
	const { dataTestId } = props;
	return (
		<StyledCard data-testid={dataTestId}>
			<CardContent></CardContent>
		</StyledCard>
	);
}

export default CustomCard;
