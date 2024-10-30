import { useState } from 'react'
import './App.css'
import questions from './data'
import Accordion from './Accordion'

function App() {
 const [data, setData] = useState(questions)

  return (
    <>
    <nav>
      <h1>Accordion</h1>
    </nav>
    <div className='heading'>
    <h2>Is multiple open accordion allowed?</h2>
    <input type="checkbox" name="check" id="" />
    </div>
    {data.map((curEle) => {
      const {id} = curEle
      return <Accordion key={(id)} {...curEle}/>
    })}
    </>
  )
}

export default App
