import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/index';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

/**
 * App Component - The root component for the application.
 * 
 * This component sets up the React Router and Redux Provider.
 * It also uses PersistGate to persist the Redux store.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* Routing to Accueil page */}
            <Route path="/" element={<Accueil />} />

            {/* Routing to Sign-in page */}
            <Route path="/login" element={<SignIn />} />

            {/* Routing to User (Profile) page */}
            <Route path="/profile" element={<User />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
