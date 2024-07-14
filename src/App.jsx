import { useState } from 'react'
import './App.css'
// import Button from './components/Button'
import Contact_us from './components/Contact_us'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Contact_us/>
    </>
  )
}

export default App
