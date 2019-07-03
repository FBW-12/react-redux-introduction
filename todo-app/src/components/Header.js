import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header className="header">
      <h1>What to do?</h1>
      <span className="tagline">{props.tagline}</span>
    </header>
  );
};

export default Header;

Header.propTypes = {
  tagline: PropTypes.string,
};
