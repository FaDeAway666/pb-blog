import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import 'github-markdown-css'

const MarkdownViewer = props => {
  const { content } = props
  return (
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
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownViewer
