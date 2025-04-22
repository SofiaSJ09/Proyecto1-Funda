import styles from '../styles/WelcomeScreen.module.css';

const WelcomeScreen = ({ onClick }) => {
  return (
    <div className={styles.welcomeContainer} onClick={onClick}>
      <div className={styles.geometricElements}>
        <div className={`${styles.geometricShape} ${styles.shape1}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape2}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape3}`}></div>
      </div>
      <div className={styles.content}></div>
      <h1 className={styles.mainTitle}>Yoilin C.A & Sofia S.J</h1>
      <h2 className={styles.subtitle}>Ing. en Sistemas</h2>
      <p className={styles.clickMessage}>Haz clic en cualquier parte para continuar</p>
    </div>
  );
};

export default WelcomeScreen;