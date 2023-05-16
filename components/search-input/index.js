import SearchOutlined from '~icons/ant-design/search-outlined.jsx'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'utils/tools'

const SearchListItem = ({ data }) => {
  return (
    <li className="mb-2 px-4 py-2 rounded border-bottom cursor-pointer hover:bg-slate-100 last:mb-0">
      <p className="leading-8 text-base">{data.title}</p>
      <div className="flex justify-between items-center">
        <div className="text-sm font-serif text-slate-400">
          {data.category.map((item, index) => (
            <>
              <span key={item.id}>{item.name}</span>
              {index < data.category.length - 1 ? <span> / </span> : null}
            </>
          ))}
        </div>
        <div className="text-xs font-serif flex">
          <span className="block ml-4 border border-orange-400 px-2 py-1 text-orange-400">
            {data.tags.map(item => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>
      </div>
    </li>
  )
}

SearchListItem.propTypes = {
  data: PropTypes.object
}

const SearchInput = ({ value, onInput }) => {
  const [focus, setFocus] = useState(false)
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    handleChange(value)
  }, [value])

  const handleInput = e => {
    onInput?.(e.target.value)
  }

  const handleChange = debounce(value => {
    // fetch mock
    console.log('change', value)
    if (value)
      setDataList([
        {
          title: 'aaa',
          tags: ['tag'],
          category: [
            { id: 'aa', name: '分类1' },
            { id: 'aa1', name: '分类1的子' }
          ],
          id: '123'
        },
        { title: 'bbb', tags: ['tag'], category: [{ id: 'aa', name: '分类1' }], id: '444' }
      ])
    else setDataList([])
  }, 500)
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center bg-white px-8 h-12 transition-all rounded-lg outline ${
          focus ? 'outline-2 outline-slate-500' : 'outline-0'
        }`}
      >
        <SearchOutlined className="text-xl shrink-0 mr-4" />
        <input
          style={{ width: '500px' }}
          className="w-96 h-full outline-0"
          placeholder="请输入标题、标签或分类"
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onInput={handleInput}
        ></input>
      </div>
      <ul style={{ width: '600px' }} className="mt-2 rounded bg-white max-h-80">
        {dataList.map(item => {
          return <SearchListItem key={item.id} data={item} />
        })}
      </ul>
    </div>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func
}

export default SearchInput
