"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles/studentProfile.module.css";
import { FaUserGraduate } from "react-icons/fa";

interface Student {
  id: number;
  fullName: string;
  admissionNo: string;
  gender: string;
  dateOfBirth: string;
  className: string;
}

export default function StudentProfilePage() {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8081/api/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!student) return <p className={styles.error}>Student not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <FaUserGraduate />
          </div>
          <h2>{student.fullName}</h2>
          <span className={styles.classBadge}>{student.className}</span>
        </div>

        <div className={styles.details}>
          <Detail label="Admission No" value={student.admissionNo} />
          <Detail label="Gender" value={student.gender} />
          <Detail label="Date of Birth" value={student.dateOfBirth} />
          <Detail label="Class" value={student.className} />
        </div>
      </div>
    </div>
  );
}

/* Reusable detail row */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.detailRow}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
