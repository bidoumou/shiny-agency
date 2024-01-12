import Card from '.'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card component', () => {
    it('should display the right picture', async () => {
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
        expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    })
})
