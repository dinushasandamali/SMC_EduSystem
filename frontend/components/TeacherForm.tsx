"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/teacherForm.module.css";
import { Teacher } from "../types/Teacher";

type Props = {
  selectedTeacher?: Teacher;
  onSubmitSuccess: () => void;
};

const TeacherForm: React.FC<Props> = ({ selectedTeacher, onSubmitSuccess }) => {
  const [teacher, setTeacher] = useState<Teacher>({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (selectedTeacher) setTeacher(selectedTeacher);
  }, [selectedTeacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = teacher.teacherId ? "PUT" : "POST";
    const url = teacher.teacherId
      ? `http://localhost:8081/api/teachers/${teacher.teacherId}`
      : "http://localhost:8081/api/teachers";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teacher),
    });

    if (res.ok) {
      setTeacher({ fullName: "", subject: "", email: "", phone: "" });
      onSubmitSuccess();
    } else {
      alert("Error saving teacher");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>{teacher.teacherId ? "Update Teacher" : "Register Teacher"}</h2>
      
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={teacher.fullName}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="subject"
          placeholder="Subject"
          value={teacher.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.row}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={teacher.email}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="phone"
          placeholder="Phone"
          value={teacher.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button className={styles.submitBtn} type="submit">
        {teacher.teacherId ? "Update" : "Save"}
      </button>
    </form>
  );
};

export default TeacherForm;
