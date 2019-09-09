import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    sended: false
  };
  send = () => {
    this.setState({ sended: true });
  };
  render() {
    if (this.state.sended === false) {
      return (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 400 }}
        >
          {props => (
            <div style={props} className="contact-container">
              <main className="contact">
                <article className="contact-content">
                  <h2>Contact us:</h2>
                  <div className="input-container">
                    <div className="input">
                      <input type="text" placeholder="Name" id="name" />
                      <input type="text" placeholder="Topic" id="topic" />
                    </div>
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                    <a href="#send" onClick={this.send}>
                      Send
                    </a>
                  </div>
                </article>
              </main>
              <footer>
                <div className="info">
                  <div className="contact-info">
                    <h3>Contact</h3>
                    <ul>
                      <li>
                        <i className="fas fa-envelope"></i> page@gmail.com
                      </li>
                      <li>
                        <i className="fas fa-phone-square-alt"></i> +421
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> New York
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info">
                    <h3>Social</h3>
                    <ul>
                      <li>
                        <i className="fab fa-twitter"></i> @page
                      </li>
                      <li>
                        <i className="fab fa-facebook-square"></i> @page
                      </li>
                      <li>
                        <i className="fab fa-instagram"></i> @page
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          )}
        </Spring>
      );
    } else {
      return (
        <div className="contact-container">
          <main className="contact">
            <article className="contact-content">
              <h2>Contact us:</h2>
              <div className="input-container">
                <h1>Thank you!</h1>
                <Link to="/">Back to home page</Link>
              </div>
            </article>
          </main>
          <footer>
            <div className="info">
              <div className="contact-info">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <i className="fas fa-envelope"></i> page@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone-square-alt"></i> +421
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> New York
                  </li>
                </ul>
              </div>
              <div className="contact-info">
                <h3>Social</h3>
                <ul>
                  <li>
                    <i className="fab fa-twitter"></i> @page
                  </li>
                  <li>
                    <i className="fab fa-facebook-square"></i> @page
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i> @page
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default Contact;
