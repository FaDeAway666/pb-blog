import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import Button from '../button'
import { login } from 'api/auth'
import { setStorage } from 'utils/tools'

const Dialog = dynamic(() => import('../mask/dialog'), { ssr: false })

const LoginDialog = props => {
  const [form] = Form.useForm()
  const { user, setUser } = useContext(GlobalContext)

  const handleConfirm = () => {
    console.log('handleConfirm', form)
    form.validateFields().then(values => {
      console.log(values)
      setUser(values)
      setStorage('user', values)
      props.onClose()
      // login(values).then(res => {
      //   console.log(res, user, setUser, 'login')
      //   setUser(res)
      //   setStorage('user', res)
      //   props.onClose()
      // })
    })
  }
  return (
    <Dialog title="登录" visible={props.visible} onClose={props.onClose}>
      <div className="article-dialog-wrapper radius-10" style={{ width: 600 }}>
        <Form
          layout={{
            wrapperCol: { span: 16 },
            labelCol: { span: 4 }
          }}
          form={form}
        >
          <Form.Item name="userName" label="用户名" rules={[{ required: true }]}>
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
    </Dialog>
  )
}

LoginDialog.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

export default LoginDialog
