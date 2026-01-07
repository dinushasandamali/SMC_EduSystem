"use client";
import { useState } from "react";
import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:8081/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>🎓</div>
        </div>
        <h2 className={styles.title}>School Management System</h2>
        <p className={styles.subtitle}>Welcome Back! Please login to continue</p>

        <div className={styles.inputGroup}>
          <input 
            className={styles.input}
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.loginBtn} onClick={login}>Login</button>

        <div className={styles.registerLink}>
          <p>Don't have an account? <span onClick={() => router.push("/register")}>Register</span></p>
        </div>
      </div>
    </div>
  );
}
