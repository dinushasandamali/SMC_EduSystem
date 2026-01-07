"use client";

import { Student } from "@/types/Student";
import styles from "@/styles/studentTable.module.css"; // your CSS file
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
  onView: (student: Student) => void;
}

export default function StudentTable({ students, onEdit, onDelete, onView }: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Admission No</th>
          <th>Name</th>
          <th>Class Room</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 && (
          <tr>
            <td colSpan={5} style={{ textAlign: "center", padding: "40px", color: "#999", fontStyle: "italic" }}>
              No students found
            </td>
          </tr>
        )}

        {students.map((s) => (
          <tr key={s.id}>
             <td data-label="Admission No">{s.admissionNo}</td>
            <td data-label="Name">{s.fullName}</td>
            <td data-label="Class Room">{s.classRoom?.name} (Grade {s.classRoom?.grade})</td>
            <td data-label="Gender">{s.gender}</td>
            <td data-label="Actions" className={styles.actions}>
              <button
                className={`${styles.iconBtn} ${styles.view}`}
                onClick={() => onView(s)}
                title="View"
              >
                <FaEye />
              </button>

              <button
                className={`${styles.iconBtn} ${styles.edit}`}
                onClick={() => onEdit(s)}
                title="Edit"
              >
                <FaEdit />
              </button>

              <button
                className={`${styles.iconBtn} ${styles.delete}`}
                onClick={() => onDelete(s.id!)}
                title="Delete"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
