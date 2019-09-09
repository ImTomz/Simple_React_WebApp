import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";
import "../style/style.css";

class Navbar extends Component {
  state = {
    showComponent: true
  };
  toggle = () => this.setState({ showComponent: !this.state.showComponent });

  render() {
    return (
      <div>
        <nav>
          <Link to="/" className="logo">
            <h1>Logo</h1>
          </Link>
          <Transition
            items={this.state.showComponent}
            from={{ opacity: 0, marginLeft: 100 }}
            enter={{ opacity: 1, marginLeft: 0 }}
            leave={{ opacity: 0, marginLeft: 100 }}
            config={{ duration: 100 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props} className="bar">
                  <div>
                    <ul className="navbar-links">
                      <Link to="/">
                        <li>Home</li>
                      </Link>
                      <Link to="/about">
                        <li>About</li>
                      </Link>
                      <Link to="/contact">
                        <li>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </animated.div>
              ))
            }
          </Transition>
          <div className="hamburger" onClick={this.toggle}>
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
