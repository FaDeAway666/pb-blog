import PropTypes from 'prop-types'

const ListHeader = ({ children }) => {
  return <div className="border-b px-4 py-2">{children}</div>
}

ListHeader.propTypes = {
  children: PropTypes.node
}

export default ListHeader
