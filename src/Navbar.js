import React from "react";

class Navbar extends React.PureComponent {
  render() {
    return (
      <header>
        <h2>
          <a>Memory Game</a>
        </h2>
        <nav>
          <li>
            <a>New Game</a>
          </li>
        </nav>
      </header>
    );
  }
}
export default Navbar;
