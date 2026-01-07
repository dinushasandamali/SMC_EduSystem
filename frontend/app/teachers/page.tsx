"use client";

import React, { useState, useEffect } from "react";
import TeacherForm from "../../components/TeacherForm";
import TeacherTable from "../../components/TeacherTable";
import { Teacher } from "../../types/Teacher";
import styles from "../../styles/teachers.module.css";

const TeacherPage: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | undefined>(undefined);

  const fetchTeachers = async () => {
    const res = await fetch("http://localhost:8081/api/teachers");
    const data = await res.json();
    setTeachers(data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleEdit = (teacher: Teacher) => setSelectedTeacher(teacher);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure?")) {
      await fetch(`http://localhost:8081/api/teachers/${id}`, { method: "DELETE" });
      fetchTeachers();
    }
  };

  const handleSave = () => {
    setSelectedTeacher(undefined);
    fetchTeachers();
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Teacher Management</h1>

        <div className={styles.formWrapper}>
          <TeacherForm selectedTeacher={selectedTeacher} onSubmitSuccess={handleSave} />
        </div>

        <TeacherTable teachers={teachers} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TeacherPage;
