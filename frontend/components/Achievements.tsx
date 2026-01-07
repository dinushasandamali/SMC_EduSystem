import styles from "@/styles/dashboard.module.css";

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Academic Excellence",
      description: "95% A/L Pass Rate"
    },
    {
      icon: "🥇",
      title: "Sports Champions",
      description: "National Level Sports Champions"
    },
    {
      icon: "🎓",
      title: "University Selections",
      description: "University Selections Every Year"
    },
    {
      icon: "📚",
      title: "Diverse Excellence",
      description: "Excellence in Arts, Commerce, Maths & Science"
    }
  ];

  return (
    <section className={styles.sectionAlt}>
      <h2>Our Achievements</h2>

      <div className={styles.cardContainer}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
            <div className={styles.achievementIcon}>{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
