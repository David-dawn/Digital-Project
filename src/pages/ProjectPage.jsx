import "./ProjectPage.css";

import pic1 from "../assets/projects/pic1.png";
import pic2 from "../assets/projects/pic2.png";
import pic3 from "../assets/projects/pic3.png";

const projects = [
  {
    title: "Sample Project",
    image: pic1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the\n industry's standard dummy text ever since the 1500s,\n when an unknown printer took a galley of type and\n scrambled it to make a type specimen book.",
  },
  {
    title: "Sample Project 2",
    image: pic2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the\n industry's standard dummy text ever since the 1500s,\n when an unknown printer took a galley of type and\n scrambled it to make a type specimen book.",
  },
  {
    title: "Sample Project 3",
    image: pic3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the\n industry's standard dummy text ever since the 1500s,\n when an unknown printer took a galley of type and\n scrambled it to make a type specimen book.",
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-header">
        <h2>
          <span className="projects-label">Our</span>
          <br />
          <strong>Projects</strong>
        </h2>
      </section>

      <section className="project-list">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              {project.description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <button className="view-more-btn">View More →</button>
            </div>
          </div>
        ))}
      </section>

      <section className="projects-pagination">
        <span className="page-number">0</span>
        <span className="divider">/</span>
        <span className="total-pages">05</span>
        <button className="arrow-btn" disabled>
          ←
        </button>
        <button className="arrow-btn">→</button>
      </section>
    </div>
  );
}

export default ProjectsPage;
