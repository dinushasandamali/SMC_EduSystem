"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StudentForm from "@/components/StudentForm";
import StudentTable from "@/components/StudentTable";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from "@/services/studentService";
import { Student, StudentDTO } from "@/types/Student";
import { ClassRoom } from "@/types/ClassRoom";
import { getClasses } from "@/services/classService";
import styles from "@/styles/students.module.css";

export default function StudentsPage() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<StudentDTO | null>(null); // <-- Use DTO here
  const [classes, setClasses] = useState<ClassRoom[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);

  const token = localStorage.getItem("token")!;

  const loadStudents = () => {
    getStudents(token).then(data => {
      if (selectedClassId) {
        setStudents(
          data.filter((s: Student) => s.classRoom?.id === selectedClassId)
        );
      } else {
        setStudents(data);
      }
    });
  };

  const loadClasses = () => {
    getClasses(token).then(setClasses);
  };

  useEffect(() => {
    loadClasses();
    loadStudents();
  }, [selectedClassId]);

  // Convert StudentDTO for backend
  const handleSave = async (studentDTO: StudentDTO) => {
    if (studentDTO.id) {
      await updateStudent(studentDTO.id, studentDTO, token);
    } else {
      await createStudent(studentDTO, token);
    }
    setSelectedStudent(null);
    loadStudents();
  };

  const handleDelete = async (id: number) => {
    await deleteStudent(id, token);
    loadStudents();
  };

  const handleView = (student: Student) => {
    router.push(`/students/${student.id}`);
  };

  const handleEdit = (student: Student) => {
    // Convert Student → StudentDTO for the form
    const dto: StudentDTO = {
      id: student.id,
      fullName: student.fullName,
      gender: student.gender,
      classRoomId: student.classRoom?.id || 0,
      admissionNo: student.admissionNo,
      dateOfBirth: student.dateOfBirth,
      startDate: student.startDate,
      endDate: student.endDate,
    };
    setSelectedStudent(dto);
  };

  const olClasses = classes.filter(c => c.grade >= 6 && c.grade <= 11);
  const alClasses = classes.filter(c => c.grade >= 12 && c.grade <= 13);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Classes</h3>

        <div className={styles.classSection}>
          <h4 className={styles.sectionTitle}>Ordinary Level</h4>
          <ul className={styles.classList}>
            {olClasses.map(c => (
              <li
                key={c.id}
                className={`${styles.classItem} ${selectedClassId === c.id ? styles.active : ""}`}
                onClick={() => setSelectedClassId(c.id)}
              >
                {c.name} (Grade {c.grade})
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.classSection}>
          <h4 className={styles.sectionTitle}>Advanced Level</h4>
          <ul className={styles.classList}>
            {alClasses.map(c => (
              <li
                key={c.id}
                className={`${styles.classItem} ${selectedClassId === c.id ? styles.active : ""}`}
                onClick={() => setSelectedClassId(c.id)}
              >
                {c.name} (Grade {c.grade})
              </li>
            ))}
          </ul>
        </div>

        <button
          className={styles.showAllBtn}
          onClick={() => router.push("/classes")}
        >
          Add Class
        </button>
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Student Management</h1>

        <div className={styles.formWrapper}>
          <StudentForm
            onSubmit={handleSave}
            selectedStudent={selectedStudent} // <-- Pass DTO
          />
        </div>

        <StudentTable
          students={students}
          onEdit={handleEdit} // <-- Use mapping function
          onDelete={handleDelete}
          onView={handleView}
        />
      </div>
    </div>
  );
}
