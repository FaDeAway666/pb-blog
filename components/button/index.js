import PropTypes from 'prop-types'

const BtnClassLists = {
  base: 'px-4 py-1 rounded',
  text: 'border-none',
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  default: 'border border-solid border-gray-300'
}

const Button = props => {
  const { type, children, htmlType } = props
  return (
    <button
      {...props}
      type={htmlType || 'button'}
      className={`${BtnClassLists.base} ${BtnClassLists[type || 'default']}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'outline', 'text', 'link']),
  children: PropTypes.node.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button
