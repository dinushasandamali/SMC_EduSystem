import { api } from "./api";

export const login = async (username: string, password: string) => {
  // Uses shared API base (http://localhost:8081/api)
  return api("/auth/login", "POST", { username, password });
};

export const register = async (username: string, email: string, password: string, role: string = "ADMIN") => {
  // Use direct fetch since login uses port 8081
  const res = await fetch("http://localhost:8081/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password, role }),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
};

export const checkAccountsExist = async () => {
  try {
    const res = await fetch("http://localhost:8081/api/auth/check-accounts");
    const data = await res.json();
    return data.exists || false;
  } catch {
    // If endpoint doesn't exist, assume accounts exist (fallback)
    return true;
  }
};