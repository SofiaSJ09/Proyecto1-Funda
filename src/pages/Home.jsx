import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';
// Import the profile images - make sure these exist in your assets folder
import profileImage1 from '../assets/profile1.jpg';
import profileImage2 from '../assets/profile2.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profileId) => {
    navigate(`/portfolio/${profileId}`);
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Currículum-Portafolio</h1>
      </div>
      
      <div className={styles.profilesSection}>
        <div className={styles.profileCircles}>
          <div 
            className={styles.profileCircle} 
            onClick={() => handleProfileClick('profile1')}
          >
            <img src={profileImage1} alt="Perfil 1" className={styles.profileImage} />
            <p className={styles.profileName}>Yoilin Castrillo A</p>
          </div>
          
          <div 
            className={styles.profileCircle} 
            onClick={() => handleProfileClick('profile2')}
          >
            <img src={profileImage2} alt="Perfil 2" className={styles.profileImage} />
            <p className={styles.profileName}>Sofia Sánchez J</p>
          </div>
        </div>
        
        <div className={styles.introText}>
          <p>
            Somos estudiantes de la carrera de ingeniería en sistemas y cursamos el cuarto año. 
            Contamos con experiencia en varios campos. Conoce más accediendo a cada perfil.
          </p>
        </div>
      </div>
      
      <div className={styles.projectsSection}>
        <button 
          className={styles.projectsButton}
          onClick={handleProjectsClick}
        >
          PROYECTOS
        </button>
        <p className={styles.projectsDescription}>
          Explora los proyectos realizados durante nuestra carrera universitaria
        </p>
      </div>
    </div>
  );
};

export default Home;