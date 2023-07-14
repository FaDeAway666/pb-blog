import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import dynamic from 'next/dynamic'
import Button from '../button'

const Mask = dynamic(() => import('../mask'), { ssr: false })

const LoginDialog = props => {
  const [form] = Form.useForm()

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
          <Form.Item name="username" label="用户名" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true }]}>
            <Input type="password" />
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

LoginDialog.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}

export default LoginDialog
