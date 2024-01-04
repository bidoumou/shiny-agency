import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    text-align: center;
    padding-bottom: 30px;
`

const freelanceProfiles = [
    {
        name: 'John Doe',
        jobTitle: 'Devops',
        // picture:
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        // picture:
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur Fullstack',
        // picture:
    },
]

function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez vos prestataires</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances
