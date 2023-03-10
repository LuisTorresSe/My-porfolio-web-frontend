import { useParams } from "react-router-dom";
import { detailsProjects } from "../../utils/bd.js";
import { StyledDetails } from "./styles";

function getProject() {
  const { idProject } = useParams();
  return detailsProjects.find((e) => e.id === parseInt(idProject));
}

export default function ProjectDetails() {
  const project = getProject();

  return (
    <StyledDetails>
      <div className="container">
        <div className="container--left">
          <img src={project.img} alt={`img ${project.name}`} />
        </div>

        <div className="container--right">
          <h1>{project.name}</h1>

          <div className="container--tools">
            <h3>Herramientas</h3>
            <div className="tools">
              {project.tools.map((e) => (
                <span className={`tool ${e}`} key={e}>
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="container--links">
            <h3>Enlaces</h3>
            <div className="links">
              <a
                className="link repository"
                href={project.repository}
                target="_blank"
              >
                Repositorio
              </a>
              <a
                className="link website"
                href={project.webSite}
                target="_blank"
              >
                Sitio Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledDetails>
  );
}
