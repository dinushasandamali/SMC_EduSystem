"use client";

import { useState } from "react";
import { register } from "@/services/authService";
import styles from "@/styles/login.module.css";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("ADMIN");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    // Validation
    if (!username || !email || !password || !confirmPassword || !role) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await register(username, email, password, role);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role || role);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.registerCard}`}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>🎓</div>
        </div>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Set up your School Management System</p>

        {error && (
          <div className={styles.errorMessage}>{error}</div>
        )}

        <div className={styles.inputGroup}>
          <input 
            className={styles.input}
            placeholder="Username" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            disabled={loading}
          />
          <input 
            className={styles.input}
            type="email"
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <select
            className={styles.select}
            value={role}
            onChange={e => setRole(e.target.value)}
            disabled={loading}
          >
            <option value="ADMIN">Admin</option>
            <option value="TEACHER">Teacher</option>
            <option value="STUDENT">Student</option>
          </select>
          <input 
            className={styles.input}
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <input 
            className={styles.input}
            type="password" 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <button 
          className={styles.loginBtn} 
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <div className={styles.registerLink}>
          <p>Already have an account? <span onClick={() => router.push("/login")}>Login</span></p>
        </div>
      </div>
    </div>
  );
}

