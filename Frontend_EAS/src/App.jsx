
import './App.css'
import { Routes,Route } from 'react-router-dom'
import RegisterScreen from './components/RegisterScreen'
import RegistrationForm from './components/RegistrationForm'
import LoginPage from './components/LoginPage'
import Home from './components/pages/Home'

function App() {


  return (
    <Routes>
      <Route path='/' element={<RegisterScreen />} />
      <Route path='/RegForm' element={<RegistrationForm />} />
      <Route path='/LogPage' element={<LoginPage/>} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
