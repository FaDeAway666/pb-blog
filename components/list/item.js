import Link from 'next/link'
import PropTypes from 'prop-types'

const ListItem = ({ data }) => {
  return (
    <li className="border-b px-4 leading-10 last:border-0">
      <Link href={data.id}>{data.title}</Link>
      <span>{data.updateTime}</span>
    </li>
  )
}

ListItem.propTypes = {
  data: PropTypes.object
}

export default ListItem
