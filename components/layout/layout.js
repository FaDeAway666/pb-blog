import Menu from '../navigate/menu'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="relative bg-gray-100">
        <Menu />
        <main className="max-w-screen-lg bg-white ml-72 min-h-[calc(100vh-9rem)]">{children}</main>
      </div>
      <Footer />
    </>
  )
}
