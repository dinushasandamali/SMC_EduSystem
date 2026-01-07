import { api } from "./api";
import { Student } from "@/types/Student";

export const getStudents = (token: string) =>
  api("/students", "GET", null, token);

export const createStudent = (student: Student, token: string) =>
  api("/students", "POST", student, token);

export const updateStudent = (id: number, student: Student, token: string) =>
  api(`/students/${id}`, "PUT", student, token);

export const deleteStudent = (id: number, token: string) =>
  api(`/students/${id}`, "DELETE", null, token);
