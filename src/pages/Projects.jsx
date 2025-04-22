import { useNavigate } from "react-router-dom"
import styles from "../styles/Projects.module.css"
import rrhhImage from "../assets/RRHH.png"
import cacpjImage from "../assets/CACPJ.png"
import univerdadImage from "../assets/Universidad.png"

const Projects = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/home")
  }

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Sistema del Centro Agrícola Cantonal de Puntarenas",
      description:
        "Es una aplicación web que integra áreas informativa y administrativa. Permite mostrar al público la misión, visión, actividades, videos, requisitos y preguntas frecuentes del centro. A nivel interno, los administradores pueden gestionar pagos del PSA, envíos de ganado, datos de afiliados y editar el contenido visible. ",
      technologies: ["NestJS", "React", "Vite", "TypeScript", "Tailwind CSS"],
      image: cacpjImage,
      repos: {
        frontend: "https://github.com/ItsChavesCR/FrontEnd-CACPJ",
        backend: "https://github.com/ItsChavesCR/BackEnd-CACPJ",
      },
      contributors: ["Yoilin Castrillo Alfaro", "Sofía Sánchez Jiménez"],
      video: "https://drive.google.com/file/d/1uvTS-6Bx_gLWraXjudm4VhyPy377kR70/preview",
    },
    {
      id: 2,
      title: "Aplicación de Gestión de Recursos Humanos",
      description:
        "Aplicación web para la gestión de recursos humanos, con módulos de departamentos, puestos, empleados y jornadas laborales. Incluye funciones CRUD, buscador integrado y seguridad con ASP.NET Identity",
      technologies: ["ASP.NET Core MVC", "Entity Framework Core", "C#", "SQL Server", "Razor Views", "ASP.NET Identity", "HTML", "CSS"],
      image: rrhhImage,
      repo: {
        frontend: "https://github.com/SofiaSJ09/AppRRHH1",
      },
      contributors: ["Sofía Sánchez Jiménez", "Yoilin Castrillo Alfaro"],
      video: "https://drive.google.com/file/d/1p7kXyIiHHEg1nweOQG1cy1r_3D1UWxQi/view?usp=sharing",
    },
    {
      id: 3,
      title: "Universidad Innovación y conocimiento",
      description:
        "El proyecto consiste en el diseño e implementación de una base de datos para una universidad ficticia llamada 'Universidad Innovación y Conocimiento'. La base de datos tiene como objetivo gestionar la información académica y administrativa de la universidad, incluyendo datos de estudiantes, cursos, inscripciones, calificaciones, recursos académicos, y reportes estadísticos.",
      technologies: ["C#", "ASP.NET", "Next", "Tailwind CSS", "React Query"],
      image: univerdadImage,
      repo: {
        frontend: "https://github.com/JosePabloSG/Universidad-Innovacion-y-Conocimiento"
      },
      contributors: ["Yoilin Castrillo Alfaro", "Sofía Sánchez Jiménez"],
    },

  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={handleBackClick} className={styles.backButton}>
          <span className={styles.backArrow}>←</span> Volver
        </button>
        <h1 className={styles.title}>Proyectos Universitarios</h1>
        <p className={styles.subtitle}>Proyectos realizados durante nuestra formación académica</p>
      </header>

      <main className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              {project.image ? (
                <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
              ) : (
                <div className={styles.projectImagePlaceholder}>{project.title.substring(0, 2)}</div>
              )}
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectMeta}>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectDetails}>
                  <div className={styles.projectContributors}>
                    <h3>Contribuyentes:</h3>
                    <ul>
                      {project.contributors.map((contributor, index) => (
                        <li key={index}>{contributor}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Enlace al repositorio */}
                  {(project.repos || project.repo) && (
                    <div className={styles.repoLinks}>
                      <h4>Código fuente:</h4>
                      <ul>
                        {project.repos && (
                          <>
                            <li>
                              <a
                                href={project.repos.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                              >
                                <span className={styles.repoIcon}>📂</span> Repositorio Frontend
                              </a>
                            </li>
                            <li>
                              <a
                                href={project.repos.backend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                              >
                                <span className={styles.repoIcon}>📂</span> Repositorio Backend
                              </a>
                            </li>
                          </>
                        )}
                        {project.repo && project.repo.frontend && (
                          <li>
                            <a
                              href={project.repo.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.repoLink}
                            >
                              <span className={styles.repoIcon}>📂</span> Repositorio
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Mostrar video si existe */}
                {project.video && (
                  <div className={styles.videoButtonContainer}>
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.videoButton}>
                      🎥 Ver video
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Projects