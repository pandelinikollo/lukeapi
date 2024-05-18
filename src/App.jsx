import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import People from './components/People'
import Planets from './components/Planets'  
import Form  from './components/Form'


function App() {

  return (
    <>
      <BrowserRouter>
        <Form/>
        <Routes>
          <Route exact path="/" element={ <Homepage/>}></Route>
          <Route path="/people:id" element={ <People />}></Route>
          <Route path="/people:id" element={ <Planets />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
