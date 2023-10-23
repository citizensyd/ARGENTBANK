import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/index';
import SignIn from './pages/Sign-in';
import User from './pages/User';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
