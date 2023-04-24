import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'

import { Editor } from '@toast-ui/react-editor'
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'

import colorPlugin from '@toast-ui/editor-plugin-color-syntax'

const plugins = [[codeSyntaxHighlightPlugin], [colorPlugin]]
const hooks = {
  addImageBlobHook: (blob, callback) => {
    console.log(blob, 'blob')
    const reader = new FileReader()
    reader.onload = () => {
      const url = reader.result
      // url是图片地址，可以上传到服务器，然后返回图片地址
      callback(url, 'alt text')
    }
    reader.readAsDataURL(blob)
  }
}
const initContent = `<div>aaa</div><h1>title</h1>`

const Markdown = () => (
  <Editor
    initialValue={initContent}
    previewStyle="vertical"
    height="600px"
    hooks={hooks}
    plugins={plugins}
    initialEditType="markdown"
    useCommandShortcut={true}
  />
)

export default Markdown
