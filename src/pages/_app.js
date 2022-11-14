import { ToastContainer } from 'react-toastify'
import GlobalStyle from '../styles/globalStyles'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  ) 
}

export default MyApp;
