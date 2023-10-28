import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/index';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<User />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
