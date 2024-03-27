import './App.css';
import Main from './pages/Main';
import { ThemeProvider } from './components/Theme';
import SignIn from './pages/SignIn';
import RegistrationConfirmation from './pages/RegistrationConfirmation';
import SignUp from './pages/SignUp';
import Success from './pages/Success';

function App() {
  return (
    <ThemeProvider>
      <div className='app-container'>
        <Main />
        {/* <SignIn />
        <RegistrationConfirmation />
        <SignUp />
        <Success /> */}
      </div> 
    </ThemeProvider>
  )
}

export default App;