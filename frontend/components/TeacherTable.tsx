"use client";

import React from "react";
import { Teacher } from "../types/Teacher";
import styles from "../styles/teacherTable.module.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Props = {
  teachers: Teacher[];
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: number) => void;
};

const TeacherTable: React.FC<Props> = ({ teachers, onEdit, onDelete }) => {
  const router = useRouter();

  const handleView = (id: number) => {
    router.push(`/teachers/${id}`);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((t) => (
          <tr key={t.teacherId}>
            <td>{t.fullName}</td>
            <td>{t.subject}</td>
            <td>{t.email}</td>
            <td>{t.phone}</td>
            <td className={styles.actions}>
              {/* View */}
              <button
                className={`${styles.iconBtn} ${styles.view}`}
                onClick={() => handleView(t.teacherId!)}
                title="View"
              >
                <FaEye />
              </button>

              {/* Edit */}
              <button
                className={`${styles.iconBtn} ${styles.edit}`}
                onClick={() => onEdit(t)}
                title="Edit"
              >
                <FaEdit />
              </button>

              {/* Delete */}
              <button
                className={`${styles.iconBtn} ${styles.delete}`}
                onClick={() => onDelete(t.teacherId!)}
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
};

export default TeacherTable;
