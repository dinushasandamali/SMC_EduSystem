import { ClassRoom } from "@/types/ClassRoom";

const API_URL = "http://localhost:8081/api/classrooms";

export async function getClasses(token: string): Promise<ClassRoom[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch classes");
  }

  const data = await response.json();

  // ✅ ALWAYS return an array
  if (Array.isArray(data)) {
    return data;
  }

  // ✅ if backend wraps response
  if (Array.isArray(data.data)) {
    return data.data;
  }

  if (Array.isArray(data.content)) {
    return data.content;
  }

  // ❌ fallback (prevents crash)
  return [];
}
