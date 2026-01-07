import styles from "@/styles/dashboard.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <h2>Our Vision & Mission</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.visionIcon}>👁️</div>
          <h3>Vision</h3>
          <p>
            To be a leading educational institution that nurtures
            knowledgeable, disciplined, and responsible citizens.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.missionIcon}>🎯</div>
          <h3>Mission</h3>
          <p>
            To provide quality education, encourage creativity,
            and build strong moral values in students.
          </p>
        </div>
      </div>
    </section>
  );
}
