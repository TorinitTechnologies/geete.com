import Button from '@mui/material/Button';

function CustomButton(props: ButtonProps) {
    const { title, variant,text } = props;
    return (
        <Button
            title={'title'}
            variant={variant}
        >{text}</Button>
    )
}

export default CustomButton