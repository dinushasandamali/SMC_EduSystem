"use client";

import { useEffect, useState } from "react";
import { StudentDTO } from "@/types/Student";
import { ClassRoom } from "@/types/ClassRoom";
import styles from "@/styles/studentForm.module.css";

interface Props {
  onSubmit: (student: StudentDTO) => void; // Send only DTO with classRoomId
  selectedStudent?: StudentDTO | null;
}

export default function StudentForm({ onSubmit, selectedStudent }: Props) {
  const [student, setStudent] = useState<StudentDTO>({
    id: undefined,
    fullName: "",
    admissionNo: "",
    gender: "",
    dateOfBirth: "",
    startDate: "",
    endDate: "",
    classRoomId: 0,
  });

  const [classrooms, setClassrooms] = useState<ClassRoom[]>([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/classrooms")
      .then((res) => res.json())
      .then((data) => setClassrooms(data))
      .catch((err) => console.error("Failed to fetch classrooms:", err));
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      setStudent({
        id: selectedStudent.id,
        fullName: selectedStudent.fullName,
        admissionNo: selectedStudent.admissionNo,
        gender: selectedStudent.gender,
        dateOfBirth: selectedStudent.dateOfBirth,
        startDate: selectedStudent.startDate,
        endDate: selectedStudent.endDate,
        classRoomId: selectedStudent.classRoomId || 0,
      });
    }
  }, [selectedStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: name === "classRoomId" ? Number(value) : value });
  };

  const handleSubmit = () => {
    if (!student.classRoomId) {
      alert("Please select a classroom");
      return;
    }
    onSubmit(student);
    setStudent({
      id: undefined,
      fullName: "",
      admissionNo: "",
      gender: "",
      dateOfBirth: "",
      startDate: "",
      endDate: "",
      classRoomId: 0,
    });
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>
        {selectedStudent ? "Update Student" : "Register Student"}
      </h2>

      {/* Full name on full width */}
      <input
        className={styles.input}
        name="fullName"
        placeholder="Full Name"
        value={student.fullName}
        onChange={handleChange}
      />

      {/* Two columns for other fields */}
      <div className={styles.gridTwoCols}>
        <input
          className={styles.input}
          name="admissionNo"
          placeholder="Admission No"
          value={student.admissionNo}
          onChange={handleChange}
        />

        <select
          className={styles.select}
          name="gender"
          value={student.gender}
          onChange={handleChange}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <input
            className={styles.input}
            type="date"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
            <label>Start Date</label>
            <input
              className={styles.input}
              type="date"
              name="startDate"
              value={student.startDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>End Date</label>
            <input
              className={styles.input}
              type="date"
              name="endDate"
              value={student.endDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Class Room</label>
            <select
              className={styles.select}
              name="classRoomId"
              value={student.classRoomId}
              onChange={handleChange}
            >
              <option value={0}>Select ClassRoom</option>
              {classrooms.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name} (Grade {cls.grade})
                </option>
              ))}
            </select>
          </div>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        {selectedStudent ? "Update" : "Register"}
      </button>
    </div>
  );
}
