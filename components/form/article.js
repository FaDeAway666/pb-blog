import PropTypes from 'prop-types'
import { Form, Input, Cascader, Select, Radio } from 'antd'
import dynamic from 'next/dynamic'
import Button from '../button'

const Mask = dynamic(() => import('../mask'), { ssr: false })

const ArticleDialog = props => {
  const [form] = Form.useForm()
  const categoryOptions = [
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ]

  const tagOptions = [
    { label: 'sdf', value: 'sdf' },
    { label: 'sdf2', value: 'sdf2' }
  ]

  const handleConfirm = () => {
    form.validateFields().then(values => {
      console.log(values)
      props.onConfirm?.(values)
    })
  }
  return (
    <Mask visible={props.visible} onClose={props.onClose}>
      <div className="article-dialog-wrapper px-20 py-10 bg-white radius-10" style={{ width: 600 }}>
        <Form
          layout={{
            wrapperCol: { span: 16 },
            labelCol: { span: 4 }
          }}
          form={form}
        >
          <Form.Item name="title" label="文章标题" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="类目" rules={[{ required: true }]}>
            <Cascader options={categoryOptions} />
          </Form.Item>
          <Form.Item name="tags" label="标签">
            <Select mode="tags" options={tagOptions} />
          </Form.Item>
          <Form.Item name="isPrivate" label="是否公开">
            <Radio.Group>
              <Radio value={1}>公开</Radio>
              <Radio value={0}>私密</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <div className="text-center">
              <Button style={{ marginRight: '10px' }} type="primary" onClick={handleConfirm}>
                确定
              </Button>
              <Button onClick={props.onClose}>取消</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Mask>
  )
}

ArticleDialog.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}

export default ArticleDialog
