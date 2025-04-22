import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/Portfolio.module.css';

// You would replace these with actual profile data
const profileData = {
  profile1: {
    name: "Yoilin CA",
    title: "Estudiante de Ingeniería en Sistemas",
    about: `Estudiante de Ingeniería en Sistemas en cuarto año de carrera, con interés en el análisis de datos y bases de datos. Cuento con conocimientos en desarrollo backend utilizando C# con ASP.NET Core y Entity Framework, así como Node.js con NestJS. 
    
    Soy una persona perseverante y con disposición para aprender. Cuando enfrento un desafío, busco soluciones y no dudo en solicitar ayuda si es necesario. Me desenvuelvo bien en equipos de trabajo donde todos aportan y colaboran para alcanzar un objetivo común.`,
    education: [
      { id: 1, institution: "Universidad Nacional de Costa Rica", degree: "Ingeniería en Sistemas", period: "2022 - Presente" }
    ],
    skills: ["C#", "React", "Node.js", "Git"],
    experience: [
      {
        id: 1,
        position: "Desarrollo",
        company: "Centro Agrícola Canronal de Puntarenas",
        description: "Desarollo backend en el sistema CACPJ",
        period: "2024 - 2025"
      }
    ],
    projects: [
      {
        id: 1,
        name: "Proyecto Universitario 1",
        description: "Descripción del proyecto",
        technologies: ["React", "CSS"]
      }
    ],
    languages: [
      {
        idioma: "Inglés B1"
      }
    ],
    contact: {
      email: "yoilinc7alfaro@gmail.com",
      linkedin: "linkedin.com/in/tuperfil",
      teléfono: "84978585"
    }
  },

  profile2: {
    name: "Sofía Sánchez Jiménez",
    title: "Estudiante de Ingeniería en Sistemas",
    about: `Curso el cuarto año de Ingeniería en Sistemas de Información. Me interesan especialmente las bases de datos y el soporte técnico, ya que disfruto entender cómo funcionan los sistemas y encontrar soluciones a los problemas. Tengo experiencia en desarrollo backend con tecnologías como NestJS, C# con ASP.NET Core y Entity Framework, además de conocimientos básicos en desarrollo frontend.

    Me considero una persona responsable, con muchas ganas de aprender y mejorar cada día. Me gusta trabajar en equipo, compartir ideas y buscar apoyo cuando es necesario para lograr los objetivos en conjunto.`,
    education: [
      { id: 1, institution: "Universidad Nacional de Costa Rica", degree: "Ingeniería en Sistemas de Información", period: "2022 - Presente" }
    ],
    skills: ["C#", "React", "Node.js", "Git"],
    experience: [
      {
        id: 1,
        position: "Desarrollo de Backend",
        company: "Centro Agrícola Cantonal de Puntarenas",
        description: "Desarrollo de funcionalidades backend en el sistema CACPJ, participación limitada en frontend",
        period: "2024 - 2025"
      }
    ],
    projects: [
      {
        id: 1,
        name: "Sistema CACPJ",
        description: "Sistema de gestión desarrollado para el Centro Agrícola Cantonal de Puntarenas",
        technologies: ["NestJS", "React"]
      }
    ],
    languages: [
      {
        idioma: "Inglés B1"
      }
    ],
    contact: {
      email: "sjimenezsofia@gmail.com",
      linkedin: "www.linkedin.com/in/sofía-s-jiménez-38ab56349",
      teléfono: "8754-0716"
    },
    color: "#2F2F2F" // Color formal: gris oscuro
  }
};

const Portfolio = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const profile = profileData[profileId];

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  if (!profile) {
    return (
      <div className={styles.notFound}>
        Perfil no encontrado
        <button onClick={handleBackClick} className={styles.backButton}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${profileId === 'profile2' ? styles.blueBackground : ''}`}>
      <header className={styles.header}>
        <button onClick={handleBackClick} className={styles.backButton}>← Inicio</button>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre mí</h2>
          <p className={styles.about}>{profile.about}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Educación</h2>
          <ul className={styles.educationList}>
            {profile.education.map(edu => (
              <li key={edu.id} className={styles.educationItem}>
                <h3>{edu.degree}</h3>
                <p>{edu.institution} | {edu.period}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Habilidades</h2>
          <div className={styles.skillsContainer}>
            {profile.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiencia</h2>
          <div className={styles.experienceList}>
            {profile.experience.map(exp => (
              <div key={exp.id} className={styles.experienceItem}>
                <h3>{exp.position}</h3>
                <p className={styles.companyPeriod}>{exp.company} | {exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Proyectos Universitarios</h2>
          <div className={styles.projectsList}>
            {profile.projects.map(project => (
              <div key={project.id} className={styles.projectItem}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Idiomas</h2>
          <div className={styles.contactInfo}>
            <p>Idioma: {profile.languages[0]?.idioma}</p>
          </div>
        </section>


        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <div className={styles.contactInfo}>
            <p>Email: {profile.contact.email}</p>
            <p>LinkedIn: {profile.contact.linkedin}</p>
            <p>Teléfono: {profile.contact.teléfono}</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <button onClick={handleProjectsClick} className={styles.projectsButton}>
          VER TODOS LOS PROYECTOS
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;