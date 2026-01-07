const API_BASE = "http://localhost:8081/api";

export const api = async (
  endpoint: string,
  method = "GET",
  body?: any,
  token?: string
) => {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};
