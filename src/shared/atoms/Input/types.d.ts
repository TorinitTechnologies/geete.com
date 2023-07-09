declare interface InputProps{
    id:string
    name:string
    label:string
    variant: 'outlined' | 'filled' | 'standard'
    dataTestId:string
    type?:string
    inputProps?:any

}