import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

function Results() {
    const { answers } = useContext(SurveyContext)
    console.log(answers)

    return (
        <div>
            <h1>Je suis le Results</h1>
        </div>
    )
}

export default Results
