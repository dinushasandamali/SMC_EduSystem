import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>SMC Edu System</h2>
      <div className={styles.links}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/students">Students</Link>
        <Link href="/teachers">Teachers</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
