import { login } from 'api/auth'
import { useState } from 'react'

const FORM_ITEM_STYLE = 'mb-2'
const FORM_INPUT_STYLE = 'bg-white border'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  console.log(userName, password)

  const handleSubmit = () => {
    login({
      userName,
      password
    })
    return false
  }
  const handleInputChange = (e, setData) => {
    setData(e.target.value)
  }
  return (
    <>
      <form>
        <div className={FORM_ITEM_STYLE}>
          <input className={FORM_INPUT_STYLE} value={userName} onInput={e => handleInputChange(e, setUserName)} />
        </div>
        <div className={FORM_ITEM_STYLE}>
          <input className={FORM_INPUT_STYLE} value={password} onChange={e => handleInputChange(e, setPassword)} />
        </div>
        <div></div>
      </form>
      <button type="submit" onClick={handleSubmit}>
        登录
      </button>
    </>
  )
}
