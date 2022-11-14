import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-sm shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Weather Forecast
        </a>
      </div>
    </nav>
  );
};

export default Header;
