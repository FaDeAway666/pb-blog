import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import IconArrowRight from '~icons/ant-design/right-outlined.jsx'

const COLLAPSE_STYLE = 'overflow-hidden h-8'
const SELECTED_STYLE = 'font-bold bg-gray-200'

const MenuContext = React.createContext({
  selected: null,
  setSelected: () => {}
})

export default function Menu(props) {
  const { data, level, onSelect } = props
  let lv = level ? parseInt(level) || 0 : 0

  const [expand, setExpand] = useState(false)
  const [current, setCurrent] = useState(null)

  const { selected, setSelected } = useContext(MenuContext)

  const handleSelect = (e, item) => {
    setCurrent(item)
    setSelected(item)
    onSelect &&
      onSelect({
        domEvent: e,
        selectedItem: current
      })
  }

  const showSelectedStyle = item => {
    if (selected?.id === item.id) return SELECTED_STYLE
    else if (lv === 0 && current?.id === item.id) return SELECTED_STYLE
    else return
  }

  return (
    <MenuContext.Provider
      value={{
        selected: current,
        setSelected: setCurrent
      }}
    >
      <ul>
        {data.map(item => {
          if (item.children?.length > 0) {
            return (
              <li key={item.id} className={`leading-8 mb-1 ${!expand ? COLLAPSE_STYLE : ''}`}>
                <div className={`relative rounded px-6 hover:bg-gray-200`} onClick={() => setExpand(!expand)}>
                  <IconArrowRight
                    className={`absolute left-0 top-1.5 transition-transform ${expand ? 'rotate-90' : 'rotate-0'}`}
                  />
                  <span className={`pl-${lv * 6} `}>{item.label}</span>
                </div>

                <Menu
                  data={item.children}
                  level={lv + 1}
                  onSelect={data => {
                    console.log(data)
                    onSelect && onSelect(data)
                  }}
                ></Menu>
              </li>
            )
          } else {
            return (
              <li key={item.id} className="leading-8 mb-1">
                <div
                  className={`relative rounded px-6 hover:bg-gray-200 ${showSelectedStyle(item)}`}
                  onClick={e => handleSelect(e, item)}
                >
                  <span className={`pl-${lv * 6} `}>{item.label}</span>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}
