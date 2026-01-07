"use client";
import styles from "@/styles/dashboard.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.logoContainer}>
          <img
            src="/college-logo.png.png"
            alt="College Logo"
            className={styles.collegeLogo}
            onError={(e) => {
              // Try alternative path if first one fails
              const target = e.currentTarget;
              if (!target.src.includes('/college-logo.png')) {
                target.src = '/college-logo.png';
              } else {
                target.style.display = 'none';
              }
            }}
          />
        </div>
        <h1>SMC Edu System</h1>
       <p>Shaping the leaders of tomorrow with quality education.</p>
      </div>
    </section>
  );
}
