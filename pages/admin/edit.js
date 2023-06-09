import dynamic from 'next/dynamic'
import Button from '@/components/button'
const Markdown = dynamic(() => import('@/components/markdown/index'), { ssr: false })

const PageEditArticle = () => {
  return (
    <div className="edit-article-wrapper">
      <div className="title-header">
        <div className="article-path"> test / test</div>
        <div className="btns">
          <Button>保存</Button>
        </div>
      </div>
      <div className="article-content">
        <h1>文章标题</h1>
        <div>
          <Markdown options={{ initialEditType: 'wysiwyg' }} />
        </div>
      </div>
    </div>
  )
}

export default PageEditArticle
