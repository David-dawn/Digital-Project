import hero from "../assets/hero.png";
import "./LandingPage.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import contact from "../assets/contact.png";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            PROJECT
            <br /> <strong>Lorum</strong>
          </h1>

          <div className="hero-controls">
            <button className="nav-btn">{"←"}</button>
            <button className="nav-btn">{"→"}</button>
          </div>

          <div className="slide-indicator">
            <span className="current">01</span>
            <span className="divider">/</span>
            <span>02</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img src={hero} alt="Hero Building" className="hero-image" />
            <button className="view-project">VIEW PROJECT →</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="about-grid">
          <div className="about-images">
            <div className="grid-image image-1">
              <img src={about1} alt="" />
            </div>
            <div className="grid-image image-2">
              <img src={about2} alt="" />
            </div>
            <div className="grid-image image-3">
              <img src={about3} alt="" />
            </div>
          </div>

          <div className="about-text">
            <h2>About</h2>
            <p className="about-text-paragraph">
              Lorem Ipsum is simply dummy text of the printing and
              <br />
              typesetting industry. Lorem Ipsum has been the
              <br />
              industry's standard dummy text ever since the 1500s,
              <br />
              when an unknown printer took a galley of type and
              <br />
              scrambled it to make a type specimen book. It has
              <br />
              survived not only five centuries, but also the leap into
              <br />
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read-more">READ MORE →</button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <h2 className="section-title">Main Focus/Mission Statement</h2>
        <div className="focus-cards">
          <div className="focus-item">
            <div className="number">1</div>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Sed efficitur, lectus et
              <br /> facilisis placerat.
            </p>
          </div>
          <div className="focus-item">
            <div className="number">2</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Sed efficitur, lectus et
              <br /> facilisis placerat, magna mauris porttitor
              <br />
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="project-grid">
          <div
            className="project-card top"
            style={{ backgroundImage: `url(${project})` }}
          >
            <div className="overlay">
              <h3>
                Sample
                <br /> Project
              </h3>
              <span className="view-more">View More →</span>
            </div>
          </div>

          <div
            className="project-card top"
            style={{ backgroundImage: `url(${project2})` }}
          />
          <div
            className="project-card bottom"
            style={{ backgroundImage: `url(${project3})` }}
          />
          <div
            className="project-card bottom"
            style={{ backgroundImage: `url(${project4})` }}
          />
          <div
            className="project-card bottom"
            style={{ backgroundImage: `url(${project5})` }}
          />
        </div>

        <div className="projects-footer">
          <button className="all-projects">All Projects →</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />

            <input type="text" placeholder="Phone Number*" required />

            <input type="email" placeholder="E-mail*" required />

            <input type="text" placeholder="Interested In" />

            <textarea placeholder="Message*" required></textarea>
          </form>

          <button type="submit" className="submit-btn">
            SEND EMAIL →
          </button>
        </div>

        <div className="contact-image">
          <img src={contact} alt="Contact" />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
