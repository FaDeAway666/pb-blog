// import Menu from '../navigate/menu'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  // const handleSelect = ({ selectedItem }) => {
  //   console.log(selectedItem, 'selected------')
  // }
  return (
    <>
      <Header />
      <div className="relative">
        {/* <div className="absolute w-64 float-left left-4 top-8">
          <Menu
            data={[
              { id: '1', label: 'aa' },
              { id: '2', label: 'bb', children: [{ id: '2-1', label: 'bb1' }] }
            ]}
            onSelect={handleSelect}
          />
        </div> */}
        <main className="max-w-screen-lg bg-white min-h-[calc(100vh-9rem)]">{children}</main>
      </div>
      <Footer />
    </>
  )
}
