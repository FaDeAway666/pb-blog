import '../styles/globals.css'
import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import Layout from '@/components/layout/layout'

const GlobalContext = createContext({
  user: null,
  theme: 'default',
  setUser: () => {},
  setTheme: () => {}
})
export { GlobalContext }
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('default')
  return (
    <GlobalContext.Provider value={{ user, theme, setUser, setTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
