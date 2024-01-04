import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost:8000/survey`).then((response) =>
            response
                .json()
                .then(({ surveyData }) => {
                    setSurveyData(surveyData)
                    setDataLoading(false)
                })
                .catch((error) => setError(true)),
        )
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey
