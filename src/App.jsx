import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import LibraryDetails from './components/LibraryDetails';
import ExploreLibraries from './components/ExploreLibraries';
import HeaderMain from './components/HeaderMain';
import Login from './components/Login'; // make sure path is correct
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

    const updateUser = (newUserData) => {
      setUser(prev => ({
        ...prev,
        ...newUserData
      }));
    };
  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HeaderMain user={user} onLogout={handleLogout} />}
        />
        <Route path="/profile" element={
          <div>
            <Profile user={user} onUpdateUser={updateUser} />
          </div>
        } />
        <Route
          path="/libraries"
          element={
          <div>
            <Header user={user} onLogout={handleLogout} />
            <LibraryDetails />
          </div>}
        />
        <Route
          path="/exploreLibraries"
          element= {
          <div>
            <Header user={user} onLogout={handleLogout} />
            <ExploreLibraries />
          </div>}
          
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
