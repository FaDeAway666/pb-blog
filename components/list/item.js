import Link from 'next/link'
import PropTypes from 'prop-types'

const ListItem = ({ data }) => {
  return (
    <li className="border-b px-4 leading-10 flex justify-between items-center">
      <Link style={{ maxWidth: '80%' }} className="overflow-hidden text-ellipsis whitespace-nowrap" href={data.id}>
        {data.title}
      </Link>
      <span className="text-xs text-red-400 font-medium">{data.updateTime}</span>
    </li>
  )
}

ListItem.propTypes = {
  data: PropTypes.object
}

export default ListItem
