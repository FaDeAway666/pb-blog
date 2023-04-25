import PropTypes from 'prop-types'

const BtnClassLists = {
  base: 'border border-solid border-gray-300 px-4 py-1 rounded',
  text: '',
  default: ''
}

const Button = props => {
  const { type, children, htmlType } = props
  return (
    <button type={htmlType || 'button'} className={`${BtnClassLists.base} ${BtnClassLists[type || 'default']}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button
