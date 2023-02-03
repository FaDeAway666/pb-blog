import Nav from '../navigate/nav'

export default function Header() {
  const navData = [
    { name: 'aa', label: 'bb' },
    { name: 'cc', label: 'dd' }
  ]
  return (
    <header className="flex items-center h-16 bg-slate-700 text-white px-8 justify-between">
      <h1 className="text-3xl tracking-wider">WPB</h1>
      <Nav data={navData} />
    </header>
  )
}
