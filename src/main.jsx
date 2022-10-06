import { BrowserRouter as Router} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ReactDOM from 'react-dom/client'
import AppContextProvider from './context/stateContext'
import App from './App'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppContextProvider>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </AppContextProvider>
  </Router>
  
)
