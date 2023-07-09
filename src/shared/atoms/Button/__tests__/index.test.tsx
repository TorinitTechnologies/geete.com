import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../index'

describe('Button', () => {

    it('button should render', async () => {
        render(<Button
            title={'Button'}
            text={'Button'}
            variant={'contained'}
            dataTestId={'button'}
            id={'btn'}
            name={'btn'}
        />)
        const btn = await screen.findByTestId('button');
        expect(btn).toBeTruthy()
        expect(btn).toHaveTextContent('Button')
    })

    it('it should call callback method on click', async () => {
        const onClick=jest.fn((e:React.MouseEvent<HTMLElement>)=>{})
        render(<Button
            title={'Button'}
            text={'Button'}
            variant={'contained'}
            dataTestId={'button'}
            id={'btn'}
            name={'btn'}
            onClick={onClick}
        />)
        const btn = await screen.findByTestId('button');
        fireEvent.click(btn);
        expect(onClick).toBeCalled()
    })
})