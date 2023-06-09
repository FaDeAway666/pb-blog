import AdminLayout from './_layout'
import List from '@/components/list'

const PageUser = () => {
  return (
    <AdminLayout>
      <div>文章列表</div>
      <div>tab</div>
      <div className="overflow-y-auto max-h-[calc(100vh-12rem)]">
        <List></List>
      </div>
    </AdminLayout>
  )
}

export default PageUser
