interface ButtonProps{
    title:string
    variant:'contained' | 'text' | 'outlined'
    text:string
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void
    dataTestId:string
    id:string
    name:string
}