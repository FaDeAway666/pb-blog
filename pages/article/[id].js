import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import 'github-markdown-css'

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
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <div>Article: {id}</div>
      <div className="markdown-body p-20">
        <ReactMarkdown
          style={{ all: 'revert' }}
          components={{
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter {...props} language={match[1]} PreTag="div">
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
            ol: ({ node, ...props }) => <ol style={{ listStyle: 'revert' }} {...props} />,
            ul: ({ node, ...props }) => <ul style={{ listStyle: 'revert' }} {...props} />
          }}
        >
          {contentStr}
        </ReactMarkdown>
      </div>
    </div>
    //   <article style={{ minWidth: '200px' }} className="p-20">
    // </article>
  )
}

export default ArticleContent
