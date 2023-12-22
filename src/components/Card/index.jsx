import PropTypes from 'prop-types'

function Card({ label, title = 'Mon titre par défaut', picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

Card.defaultProps = {
    title: 'Mon titre par défaut',
}

export default Card
