<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> 275407b (testing with zach)
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <App />
)
