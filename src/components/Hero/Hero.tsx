import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Hi, I'm</p>
      <h1 className={styles.name}>Mayank Parkar</h1>
      <h2 className={styles.role}>Full-Stack Developer</h2>
      <p className={styles.bio}>
        I build scalable web applications with React, Node.js, and TypeScript.
      </p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>
          View My Work
        </a>
        <a
          href="https://github.com/MayankParkar"
          target="_blank"
          rel="noreferrer"
          className={styles.btnSecondary}
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Hero;
