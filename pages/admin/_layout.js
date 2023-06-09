import SearchOutlined from '~icons/ant-design/search-outlined.jsx'
import Menu from '@/components/navigate/menu'

const menuData = [
  { id: '1', label: 'sdf' },
  { id: '2', label: 'sdf2' }
]

const AdminLayout = ({ children }) => {
  return (
    <div className="flex py-10" style={{ minWidth: 1200 }}>
      <section className="left w-96 px-10 py-12h-full">
        <div className="flex items-center mb-4" role="button">
          <SearchOutlined />
          <span>写文章</span>
        </div>
        <div>
          <Menu data={menuData}></Menu>
        </div>
      </section>
      <section className="flex-1 px-10">{children}</section>
    </div>
  )
}

export default AdminLayout
