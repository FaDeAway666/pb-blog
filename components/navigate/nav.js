import Link from 'next/link'
import PropTypes from 'prop-types'

export default function Nav(props) {
  const { data } = props
  return (
    <div className="flex">
      {data.map(item => (
        <Link key={item.name} className="mr-8 last:mr-0" href="/">
          {item.label}
        </Link>
      ))}
    </div>
  )
}

Nav.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}
