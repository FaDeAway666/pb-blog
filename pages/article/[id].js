import MarkdownViewer from '@/components/markdown/view'

// eslint-disable-next-line
const contentStr = `
# heading 1
*heading*
**bold**

- 1
  - 1.1
- 2

> blockquote

~~~javascript
const a = 1
function b() {
  console.log(a)
}
~~~
`
const ArticleContent = () => {
  return (
    <div>
      article
      <div className="markdown-body p-20">
        <MarkdownViewer content={contentStr} />
      </div>
    </div>
    //   <article style={{ minWidth: '200px' }} className="p-20">
    // </article>
  )
}

export default ArticleContent
