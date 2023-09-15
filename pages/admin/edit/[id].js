import dynamic from 'next/dynamic'
import Button from '@/components/button'
import AdminLayout from '../_layout'
const Markdown = dynamic(() => import('@/components/markdown/index'), { ssr: false })

const PageEditArticle = () => {
  return (
    <AdminLayout>
      <div className="edit-article-wrapper">
        <div className="flex items-center justify-between mb-4">
          <div className="article-path"> test / test</div>
          <div className="btns">
            <Button>保存</Button>
          </div>
        </div>
        <div className="article-content">
          <h1 className="text-2xl font-bold mb-4">文章标题</h1>
          <div>
            <Markdown options={{ initialEditType: 'wysiwyg' }} />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default PageEditArticle
