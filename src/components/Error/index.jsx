import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import ErrorIllustration from '../../assets/404.svg'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ErrorTitle = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
    font-weight: 600;
`

const ErrorSubtitles = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
`

const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    const { theme } = useTheme()

    return (
        <ErrorWrapper theme={theme}>
            <ErrorTitle theme={theme}>Oups...</ErrorTitle>
            <Illustration src={ErrorIllustration} alt="404" />
            <ErrorSubtitles theme={theme}>
                Il semblerait qu'il y ait un problème
            </ErrorSubtitles>
        </ErrorWrapper>
    )
}

export default Error
