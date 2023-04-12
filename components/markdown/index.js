import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/react-editor'

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

const Markdown = () => (
  <Editor
    initialValue="hello react editor world!"
    previewStyle="vertical"
    height="600px"
    hooks={hooks}
    initialEditType="markdown"
    useCommandShortcut={true}
  />
)

export default Markdown
