import { StyledTextField } from './styles'

function Input(props: InputProps) {
    const { id, name, label, variant,dataTestId,type,inputProps } = props;
    const s='';
    return (
        <StyledTextField
            id={id}
            name={name}
            label={label}
            variant={variant}
            data-testid={dataTestId}
                                                 type={type}
            inputProps={inputProps}
        />
    )
}

export default Input