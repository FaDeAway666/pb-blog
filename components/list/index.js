import { useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import ListItem from './item'
import ListHeader from './header'
import style from './style.module.scss'

const ArticleList = ({ list, target }) => {
  return (
    <ul className="w-4/5">
      {list.map(item => {
        return <ListItem key={item.id} data={item} target={target}></ListItem>
      })}
    </ul>
  )
}

ArticleList.propTypes = {
  list: PropTypes.array,
  target: PropTypes.string
}

const initPagination = {
  page: 1,
  pageSize: 10,
  total: 100
}

function paginationReducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload
      }
    case 'total':
      return {
        ...state,
        total: action.payload
      }
    default:
      throw new Error()
  }
}

const ArticleListContainer = ({ title, query, fetch, target }) => {
  const [list, setList] = useState([])
  const [pagination, dispatchPagination] = useReducer(paginationReducer, initPagination)
  console.log(pagination, 'pagination')

  useEffect(() => {
    // fetch mock
    // fetch() get list
    setList([
      { title: 'aaa', tags: ['tag'], category: [{ id: 'aa', name: '分类1' }], id: '123', updateTime: '2023-04-01' },
      { title: 'bbb', tags: ['tag'], category: [{ id: 'aa', name: '分类1' }], id: '444' }
    ])
  }, [query])

  const handlePageChange = (page, pageSize) => {
    dispatchPagination({ type: 'change', payload: { page, pageSize } })
  }

  return (
    <>
      {title ? <ListHeader>{title}</ListHeader> : null}
      <div className="w-3/4 my-32 flex justify-center">
        <ArticleList list={list} target={target}></ArticleList>
      </div>
      <div className={style.pagination}>
        <Pagination defaultCurrent={pagination.page} total={pagination.total} onChange={handlePageChange}></Pagination>
      </div>
    </>
  )
}

ArticleListContainer.propTypes = {
  title: PropTypes.node,
  query: PropTypes.object,
  fetch: PropTypes.func,
  target: PropTypes.string
}

export default ArticleListContainer
