import { useState, useContext } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import SearchOutlined from '~icons/ant-design/search-outlined.jsx'
import Nav from '../navigate/nav'
import Button from '../button'
import SearchInput from '../search-input'
import LoginDialog from '../form/login'
import { GlobalContext } from '../../pages/_app'
import { getStorage } from 'utils/tools'

const Mask = dynamic(() => import('../mask'), { ssr: false })

export default function Header() {
  const navData = [
    { name: 'aa', label: 'bb' },
    { name: 'cc', label: 'dd' },
    { name: 'ee', label: 'ff' },
    { name: 'gg', label: 'hh' }
  ]

  const [visible, setVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { user, setUser } = useContext(GlobalContext)

  const storage = getStorage('user')
  if (storage) setUser(storage)

  const handleSearchClick = () => {
    setVisible(true)
  }
  const handleMaskClose = () => {
    setVisible(false)
    setSearchValue('')
  }
  const handleLoginClose = () => {
    setLoginVisible(false)
  }

  return (
    <>
      <header className="flex items-center h-16 bg-stone-700 text-white px-8 justify-between">
        <h1 className="text-3xl shrink-0 tracking-wider">PB&apos;s Blog</h1>
        <Nav data={navData} />
        <div className="flex items-center">
          <SearchOutlined className="text-xl shrink-0 cursor-pointer mr-4" onClick={handleSearchClick} />

          {user ? (
            <Link className="ml-4" href="/admin">
              {user.userName}
            </Link>
          ) : (
            <Button onClick={() => setLoginVisible(true)} type="text">
              登录
            </Button>
          )}
        </div>
      </header>
      <Mask visible={visible} onClose={handleMaskClose}>
        <SearchInput value={searchValue} onInput={val => setSearchValue(val)} />
      </Mask>
      <LoginDialog visible={loginVisible} onClose={handleLoginClose} />
    </>
  )
}
