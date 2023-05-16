import { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import MoreOutlined from '~icons/ant-design/more-outlined.jsx'
import Link from 'next/link'
import { debounce } from 'utils/tools'

function setMenuItemWidths(nav, menuWidths) {
  const children = Array.from(nav.children)
  children.forEach((item, index) => {
    menuWidths[index] = item.getBoundingClientRect().width
  })
}

function childOutsideParentIndex(widths) {
  let totalWidth = 0,
    gutter = 16,
    wrapperWidth = document.body.offsetWidth - 400

  for (let i = 0; i < widths.length; i++) {
    totalWidth += widths[i]
    if (totalWidth + gutter * i > wrapperWidth) {
      return i
    }
  }
  console.log(totalWidth, wrapperWidth)
  // if (children.length < data.length) return children.length
  return -1
}

function buildDropdownItems(data) {
  return data.map(item => {
    return {
      key: item.value,
      label: item.label
    }
  })
}

export default function Nav(props) {
  const { data } = props

  const navRef = useRef(null)
  const [expandIndex, setExpandIndex] = useState(-1)
  const [dropdownItems, setDropdownItems] = useState([])
  const menuWidths = new Array(data.length).fill(0)

  useEffect(() => {
    const nav = navRef.current

    // 保存menuItem的宽度
    setMenuItemWidths(nav, menuWidths)

    // 首次加载时，判断是否需要出现下拉菜单
    let index = childOutsideParentIndex(menuWidths)
    setExpandIndex(index)

    const handleResize = debounce(() => {
      let index = childOutsideParentIndex(menuWidths)
      console.log('show', index)
      setExpandIndex(index)
    }, 100)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [data])

  useEffect(() => {
    setDropdownItems(buildDropdownItems(data.slice(expandIndex)))
  }, [data, expandIndex])

  return (
    <div ref={navRef} className="flex flex-auto px-12">
      {data.slice(0, expandIndex > -1 ? expandIndex : data.length).map(item => (
        <Link key={item.name} className="mr-8 last:mr-0" href="/">
          {item.label}
        </Link>
      ))}
      {expandIndex > -1 ? (
        <Dropdown menu={{ items: dropdownItems }}>
          <MoreOutlined className="text-xl rotate-90 cursor-pointer" />
        </Dropdown>
      ) : null}
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
