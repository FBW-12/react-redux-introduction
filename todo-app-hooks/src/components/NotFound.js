import React, { useEffect } from 'react';
import Header from './Header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Help | What to do?';
  }, []);

  return (
    <div className="container">
      <Header tagline="404 -  Page not found!" />
      <div className="alert alert-warning">
        <strong>Oops.... sorry!</strong>
        <br />
        <span>The requested page could not be found.</span>
      </div>
    </div>
  );
}
