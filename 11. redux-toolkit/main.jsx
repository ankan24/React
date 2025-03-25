 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //! 2. wrap the app - access store all over application */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
