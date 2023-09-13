import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import Menu from '@/components/navigate/menu'
import ArticleDialog from '@/components/form/article'

const menuData = [
  { id: '1', label: 'sdf' },
  { id: '2', label: 'sdf2' }
]

const AdminLayout = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <div className="flex py-10" style={{ minWidth: 1200 }}>
        <section className="left w-96 px-10 py-12h-full">
          <div className="flex items-center mb-4" role="button" onClick={() => setVisible(true)}>
            <AiOutlineSearch />
            <span>写文章</span>
          </div>
          <div>
            <Menu data={menuData}></Menu>
          </div>
        </section>
        <section className="flex-1 px-10">{children}</section>
      </div>
      <ArticleDialog visible={visible} onClose={handleClose}></ArticleDialog>
    </>
  )
}

export default AdminLayout
