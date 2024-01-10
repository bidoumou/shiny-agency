import styled from 'styled-components'
import HomeIllustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const HomeContainer = styled.div`
    margin: 30px;
    padding: 60px 90px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`

const Illustration = styled.img`
    flex: 1;
`

const StyledTitle = styled.h2`
    font-size: 55px;
    padding-bottom: 30px;
    line-height: 50px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
`

function Home() {
    const { theme } = useTheme()

    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <LeftCol>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s'occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
