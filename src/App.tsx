import './style/index.css'
import './style/App.css'
import Header from './templates/Header'
import Footer from './templates/Footer'
import { BrowserRouter } from 'react-router'
import AppRoutes from './AppRoutes/AppRoutes'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
