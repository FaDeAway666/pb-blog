import '../styles/globals.css'
import PropTypes from 'prop-types'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
