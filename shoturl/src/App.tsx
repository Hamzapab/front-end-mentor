import { Home } from './home'
import Footer from './Footer'
import { useLenis } from './hooks/useLenis';

import './index.css'

function App() {
  useLenis();

  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

export default App
