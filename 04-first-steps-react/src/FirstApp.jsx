import PropTypes from 'prop-types'

export const FirstApp = ({ title = 'No title', subtitle = 'No subtitle', name = 'Raul' }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
}
