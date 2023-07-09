import { render, screen } from "@testing-library/react"
import Input from ".."

describe('Input', () => {

    it('it should render input field with data-testid', async () => {
        render(<Input
            id={'input'}
            name={'input'}
            label={'Input'}
            variant={'outlined'}
            dataTestId={'input'}
        />)
        const input = await screen.findByTestId('input');
        expect(input).toBeInTheDocument()
        expect(input).toHaveTextContent('Input')
    })


    it('it should render password field', async() => {
        render(<Input
            id={'input'}
            name={'input'}
            label={'Input'}
            variant={'outlined'}
            dataTestId={'input'}
            type={'password'}
          />)
        //  const input = await screen.getByRole('textbox');
     })


})