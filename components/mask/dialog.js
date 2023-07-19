import PropTypes from 'prop-types'
import CloseIcon from '~icons/ant-design/close-outlined.jsx'
import Mask from './index.js'

const Dialog = props => {
  const { title, visible, onClose, children } = props
  return (
    <Mask visible={visible} onClose={onClose}>
      <div className="bg-white rounded">
        {/* header */}
        <div className="h-12 px-8 leading-12 flex justify-between items-center">
          <div className="text-lg font-medium">{title}</div>
          <CloseIcon className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="px-8 py-4">{children}</div>
      </div>
    </Mask>
  )
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node
}
export default Dialog
