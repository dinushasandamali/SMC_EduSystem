"use client";

import { ClassRoom } from "@/types/ClassRoom";
import styles from "@/styles/classTable.module.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {
  classes: ClassRoom[];
  onEdit: (cls: ClassRoom) => void;
  onDelete: (id: number) => void;
}

export default function ClassTable({ classes, onEdit, onDelete }: Props) {
  const router = useRouter();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {(Array.isArray(classes) ? classes : []).map(cls => (
          <tr key={cls.id}>
            <td>{cls.name}</td>
            <td>{cls.grade}</td>

            <td className={styles.actions}>
              {/* View */}
              <button
                className={`${styles.iconBtn} ${styles.view}`}
                title="View Class"
                onClick={() => router.push(`/classes/${cls.id}`)}
              >
                <FaEye />
              </button>

              {/* Edit */}
              <button
                className={`${styles.iconBtn} ${styles.edit}`}
                title="Edit Class"
                onClick={() => onEdit(cls)}
              >
                <FaEdit />
              </button>

              {/* Delete */}
              <button
                className={`${styles.iconBtn} ${styles.delete}`}
                title="Delete Class"
                onClick={() => onDelete(cls.id)}
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
