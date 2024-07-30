
import Routes from './pages/Routes'
import './App.css'
import { AuthProvider } from './AuthContext'

function App() {
 

  return (
    <AuthProvider>
   <Routes/>
   </AuthProvider>
  )
}

export default App
