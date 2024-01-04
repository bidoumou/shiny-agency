import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.backgroundLight};
`

const ErrorTitle = styled.h1`
    font-weight: 600;
`

const ErrorSubtitles = styled.h2`
    font-weight: 600;
    color: ${colors.secondary};
`

const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration
                src="https://github.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/blob/assets/404.svg?raw=true"
                alt="404"
            />
            <ErrorSubtitles>Il semblerait qu'il y ait un problème</ErrorSubtitles>
        </ErrorWrapper>
    )
}

export default Error
