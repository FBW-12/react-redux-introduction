import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ tagline }) {
  return (
    <header className="header">
      <h1>What do do?</h1>
      <span className="tagline">{tagline}</span>
    </header>
  );
}

Header.propTypes = {
  tagline: PropTypes.string,
};
