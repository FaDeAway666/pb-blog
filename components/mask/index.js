import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const Mask = props => {
  const { visible, children, onClose } = props

  const hanldeMaskClick = e => {
    console.log(e.target, e.currentTarget)
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed w-full h-full z-100 top-0 left-0 backdrop-brightness-50 bg-white/30 ${
        visible ? 'backdrop-blur-sm block' : 'hidden backdrop-blur-none'
      }`}
      onClick={hanldeMaskClick}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div style={{ top: '15vh' }} className="absolute inset-x-1/2 flex items-center justify-center">
        {children}
      </div>
    </div>,
    document.body
  )
}

Mask.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default Mask
