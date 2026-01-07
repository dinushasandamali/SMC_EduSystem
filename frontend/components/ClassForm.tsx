"use client";

import { useEffect, useState } from "react";
import { ClassRoom } from "@/types/ClassRoom";
import styles from "@/styles/classForm.module.css";

/*
interface Teacher {
  teacherId: number;
  fullName: string;
}
*/

interface Props {
  onSubmit: (cls: ClassRoom) => void;
  initialData?: ClassRoom | null;
}

export default function ClassForm({ onSubmit, initialData }: Props) {

  // 🔹 Only keep name and grade
  const [classRoom, setClassRoom] = useState<Omit<ClassRoom, "id">>({
    name: "",
    grade: 6,
    // teacherId: undefined,
    // teacherName: "",
  });

  /*
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  */

  /*
  useEffect(() => {
    // Fetch teachers for dropdown
    fetch("http://localhost:8081/api/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Failed to fetch teachers:", err));
  }, []);
  */

  useEffect(() => {
    if (initialData) {
      setClassRoom({
        name: initialData.name || "",
        grade: initialData.grade || 6,
        // teacherId: initialData.teacherId,
        // teacherName: initialData.teacherName || "",
      });
    } else {
      setClassRoom({
        name: "",
        grade: 6,
        // teacherId: undefined,
        // teacherName: "",
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setClassRoom({ ...classRoom, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submitData: ClassRoom = initialData
      ? {
          id: initialData.id,   // UPDATE
          name: classRoom.name,
          grade: Number(classRoom.grade),
        }
      : {
          name: classRoom.name,
          grade: Number(classRoom.grade),
        } as ClassRoom; // CREATE (NO ID)

    onSubmit(submitData);

    if (!initialData) {
      setClassRoom({
        name: "",
        grade: 6,
      });
    }
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>
        {initialData ? "Update Classroom" : "Register Classroom"}
      </h2>

      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Class Name (e.g., 6A, 7B)"
          value={classRoom.name}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="number"
          name="grade"
          min={6}
          max={13}
          placeholder="Grade"
          value={classRoom.grade}
          onChange={handleChange}
          required
        />
      </div>

      {/*
      <select
        className={styles.select}
        name="teacherId"
        value={classRoom.teacherId || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select Teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.teacherId} value={teacher.teacherId}>
            {teacher.fullName}
          </option>
        ))}
      </select>
      */}

      <button className={styles.submitBtn} type="submit">
        {initialData ? "Update" : "Save"}
      </button>
    </form>
  );
}
