"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import styles from "@/styles/login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      window.location.href = "/dashboard";
    } catch {
      alert("Login failed");
    }
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
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            className={styles.input}
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <button className={styles.loginBtn} onClick={handleLogin}>Login</button>

        <div className={styles.registerLink}>
          <p>Don't have an account? <span onClick={() => router.push("/register")}>Register</span></p>
        </div>
      </div>
    </div>
  );
}
