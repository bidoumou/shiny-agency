import logo from '../../assets/dark-logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

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
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={logo} alt="logo" />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
