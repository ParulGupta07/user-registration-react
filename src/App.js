import './App.css';
import HeaderComponent from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import UserLogin from './components/user-login/user-login.component';
import UserSignUp from './components/user-sign-up/sign-up.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HeaderComponent />}>
          <Route index element={<UserSignUp />} />
          <Route path='/login' element={<UserLogin />} />
        </Route>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
