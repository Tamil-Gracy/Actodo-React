import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import ActodoList from './components/ActodoList'

function App() {
  const [actvitiesArr, setActivityArr]=useState([]);
  return (
    <div className='bg-black p-5 md:px-15 md:py-10'>
      <div className='bg-white p-5 md:p-10 border rounded-xl'>
       <Header />
       <Cards actvitiesArr={actvitiesArr} setActivityArr={setActivityArr}/>
       <ActodoList actvitiesArr={actvitiesArr} setActivityArr={setActivityArr}/>
      </div>
    </div>
  )
}

export default App
