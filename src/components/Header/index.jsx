import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'

const NavContainer = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HomeLogo = styled.img`
    height: 70px;
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo
                    src={theme === 'light' ? DarkLogo : LightLogo}
                    alt="logo"
                />
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">
                    Accueil
                </StyledLink>
                <StyledLink $theme={theme} to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
