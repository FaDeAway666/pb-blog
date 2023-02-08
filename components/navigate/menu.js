import PropTypes from 'prop-types'
import IconArrowRight from '~icons/ant-design/right-outlined.jsx'

export default function Menu(props) {
  const { data } = props
  return (
    <ul className="w-100">
      {data.map(item => {
        if (item.children?.length > 0) {
          return (
            <li key={item.id}>
              <div className="flex aligns-center">
                <IconArrowRight />
                <span>{item.label}</span>
              </div>
              <Menu data={item.children}></Menu>
            </li>
          )
        } else {
          return (
            <li>
              <span>{item.label}</span>
            </li>
          )
        }
      })}
    </ul>
  )
}

Menu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.array
    })
  )
}
