import Card from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card component', () => {
    it('should display the title and the picture', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien frontend"
                    image="/myPicture.png"
                />
            </ThemeProvider>,
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText(/Harry/i)
        expect(cardPicture.src).toBe('http://localhost/profile.png')
        expect(cardTitle.textContent).toBe(' Harry Potter ')
    })

    it('should surround the title by stars', () => {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien frontend"
                    image="/myPicture.png"
                />
            </ThemeProvider>,
        )
        const cardTitle = screen.getByText(/Harry/i)
        const parentNode = cardTitle.closest('div')

        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐ Harry Potter ⭐')
    })
})
