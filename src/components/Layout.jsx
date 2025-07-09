import React from 'react';
import Header from './Header';

function Layout({ children, user, onLogout }) {
  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;