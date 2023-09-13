import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const COLLAPSE_STYLE = 'overflow-hidden h-8'
const SELECTED_STYLE = 'font-bold bg-gray-200'

const MenuContext = React.createContext({
  selected: null,
  setSelected: () => {}
})

function Menu(props) {
  const { data, level } = props
  let lv = level || 0

  const [expand, setExpand] = useState(false)
  // const [current, setCurrent] = useState(null)
  const { selected, setSelected } = useContext(MenuContext)

  const handleSelect = (e, item) => {
    // setCurrent(item)
    setSelected({
      domEvent: e,
      selectedItem: item
    })
  }

  // const showSelectedStyle = item => {
  //   if (selected?.id === item.id) return SELECTED_STYLE
  //   else if (lv === 0 && current?.id === item.id) return SELECTED_STYLE
  //   else return
  // }

  return (
    <ul>
      {data.map(item => {
        if (item.children?.length > 0) {
          return (
            <li key={item.id} className={`leading-8 mb-1 ${!expand ? COLLAPSE_STYLE : ''}`}>
              <div className={`relative rounded px-6 hover:bg-gray-200`} onClick={() => setExpand(!expand)}>
                <AiOutlineArrowRight
                  className={`absolute left-0 top-1.5 transition-transform ${expand ? 'rotate-90' : 'rotate-0'}`}
                />
                <span className={`pl-${lv * 6} `}>{item.label}</span>
              </div>

              <Menu data={item.children} level={lv + 1}></Menu>
            </li>
          )
        } else {
          return (
            <li key={item.id} className="leading-8 mb-1">
              <div
                className={`relative rounded px-6 hover:bg-gray-200 ${selected?.id === item.id ? SELECTED_STYLE : ''}`}
                onClick={e => handleSelect(e, item)}
              >
                <span className={`pl-${lv * 6} `}>{item.label}</span>
              </div>
            </li>
          )
        }
      })}
    </ul>
  )
}

Menu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  level: PropTypes.number
}

const MenuWrapper = props => {
  const { data, onSelect } = props

  const [current, setCurrent] = useState(null)
  const triggerSelect = data => {
    let { selectedItem } = data
    setCurrent(selectedItem)
    onSelect && onSelect(data)
  }

  return (
    <MenuContext.Provider
      value={{
        selected: current,
        setSelected: triggerSelect
      }}
    >
      <Menu data={data} />
    </MenuContext.Provider>
  )
}

MenuWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func
}

export default MenuWrapper
