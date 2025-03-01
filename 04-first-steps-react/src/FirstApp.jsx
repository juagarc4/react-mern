import PropTypes from 'prop-types'

export const FirstApp = ({ title = 'There is no title', subtitle = 'There is no subtitle', name = 'Raul' }) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
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
