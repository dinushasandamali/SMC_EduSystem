import styles from "@/styles/dashboard.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <h2>Contact Information</h2>

      <div className={styles.contactBox}>
        <p><strong>Address:</strong> ABC College, Sri Lanka</p>
        <p><strong>Phone:</strong> +94 71 234 5678</p>
        <p><strong>Email:</strong> info@abccollege.lk</p>
      </div>
    </section>
  );
}
