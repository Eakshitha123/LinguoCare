import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

import Faq from './Components/Faq/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Faq/>
     
    </>
  )
}

export default App
