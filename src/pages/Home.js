import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-scroll";
import ScrollToTop from "../components/ScrollTop";
import titlePhoto from "../img/photo.png";
import pic1 from "../img/1.png";
import pic2 from "../img/2.png";
import pic3 from "../img/3.png";

function Home() {
  return (
    <div>
      <ScrollToTop />
      <header>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 600 }}
        >
          {props => (
            <div style={props}>
              <div className="titles">
                <section className="title">
                  <h1>Welcome on our page</h1>
                  <p>Here you will find everything about us.</p>
                </section>
                <div className="titles-img-container">
                  <img id="img" src={titlePhoto} alt="title" />
                </div>
              </div>
              <div className="move-arrow">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <i className="fas fa-chevron-down fa-2x arrow"></i>
                </Link>
              </div>
            </div>
          )}
        </Spring>
      </header>
      <main className="about">
        <article className="about-cnt">
          <h2>About us :</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            accusantium. Alias libero sed, ab nulla similique modi officiis
            error accusantium ipsa soluta iure suscipit minima fugiat rerum
            vitae est incidunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate officia eveniet maxime provident earum
            iure hic soluta atque minima libero? Perferendis et, qui voluptates
            nisi dicta provident porro laboriosam eveniet? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum, et? Ullam reiciendis hic
            fugit eligendi dolore deserunt laborum sint accusantium labore in
            velit mollitia voluptas amet voluptates, nam maiores repellendus.
          </p>
          <div className="img-container">
            <img src={pic1} alt="1" />

            <img src={pic2} alt="2" />

            <img src={pic3} alt="3" />
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

export default Home;
