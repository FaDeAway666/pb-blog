import Login from '@/components/login'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Markdown = dynamic(() => import('../components/markdown/index'), { ssr: false })

const THEME_LIST = ['dark']
export default function Home() {
  const changeTheme = theme => {
    const classList = document.documentElement.classList
    // 移除所有已经设置在classList中的theme
    console.log(classList, 'classlist')
    THEME_LIST.forEach(item => {
      classList.remove(`theme-${item}`)
    })
    if (theme) classList.add(`theme-${theme}`)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/about">about</Link>
        <Login />
        <div className="bg-skin-base text-skin-base w-200 h-20 border">
          <span className="text-skin-base">test theme block</span>
        </div>
        <button onClick={() => changeTheme()}>默认主题</button>
        <button onClick={() => changeTheme('dark')}>深色主题</button>
      </div>
      <Markdown />
    </>
  )
}
