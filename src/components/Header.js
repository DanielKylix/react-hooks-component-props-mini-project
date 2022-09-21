import React from "react";

const Header = ({ name }) => {
  return (
    <React.Fragment>
      <header>
        <h1>{name}</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
