 import { StyledButton } from './styles';

function CustomButton(props: ButtonProps) {
    const { title, variant, text } = props;
    return (
        <StyledButton
            title={title}
            variant={variant}
        >{text}</StyledButton>
    )
}

export default CustomButton