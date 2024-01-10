import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.span`
    color: ${({ theme }) =>
        theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) =>
            theme === 'light' ? colors.secondary : '#FFFFFF'};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function formatQueryParams(answers) {
    const answerNumbers = Object.keys(answers)

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstAnswer = index === 0
        const separator = isFirstAnswer ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

function Results() {
    const { theme } = useTheme()
    const { answers } = useContext(SurveyContext)
    const queryParams = formatQueryParams(answers)

    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/results?${queryParams}`,
    )

    if (error) {
        return <span>Il y a un problème</span>
    }

    const resultsData = data?.resultsData // Syntaxe permettant de renvoyer undefined si data est null ou undefined

    return isLoading ? (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>
                Les compétences dont vous avez besoin :
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobTitle
                            key={`result-title-${index}-${result.title}`}
                            theme={theme}
                        >
                            {result.title}
                            {index === resultsData.length - 1 ? '' : ','}
                        </JobTitle>
                    ))}
            </ResultsTitle>
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledLink>
            <DescriptionWrapper>
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobDescription
                            key={`result-detail-${index}-${result.title}`}
                            theme={theme}
                        >
                            <JobTitle theme={theme}>{result.title}</JobTitle>
                            <p>{result.description}</p>
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Results
