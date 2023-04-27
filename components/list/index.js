import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import ListItem from './item'
import ListHeader from './header'

const ArticleList = ({ list }) => {
  return (
    <ul className="w-4/5">
      {list.map(item => {
        return <ListItem key={item.id} data={item}></ListItem>
      })}
    </ul>
  )
}

ArticleList.propTypes = {
  list: PropTypes.array
}

const ArticleListContainer = ({ title, query }) => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // fetch mock
    setList([
      { title: 'aaa', tags: ['tag'], category: [{ id: 'aa', name: '分类1' }], id: '123', updateTime: '2023-04-01' },
      { title: 'bbb', tags: ['tag'], category: [{ id: 'aa', name: '分类1' }], id: '444' }
    ])
  }, [query])

  return (
    <>
      <ListHeader>{title}</ListHeader>
      <div className="w-3/4 my-32 flex justify-center">
        <ArticleList list={list}></ArticleList>
      </div>
      <Pagination defaultCurrent={page} total={total}></Pagination>
    </>
  )
}

ArticleListContainer.propTypes = {
  title: PropTypes.node,
  query: PropTypes.object
}

export default ArticleListContainer
