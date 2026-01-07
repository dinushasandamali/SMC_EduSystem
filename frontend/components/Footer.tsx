import styles from "@/styles/footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>SMC Edu System</h3>
          <p>Empowering Students from Grade 6 to 13</p>
          <p>Building a brighter future through quality education</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>📍 SMC Edu System, Sri Lanka</p>
          <p>📞 +94 71 234 5678</p>
          <p>✉️ smc@edusystem.lk</p>
        </div>

        {/* 🔽 ICONS INSTEAD OF BUTTONS */}
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SMC Edu System. All rights reserved.</p>
      </div>
    </footer>
  );
}
