"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles/teacherProfile.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";

interface Teacher {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  classTeacherOf?: string;
}

export default function TeacherProfilePage() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8081/api/teachers/${id}`)
      .then(res => res.json())
      .then(data => setTeacher(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!teacher) return <p className={styles.error}>Teacher not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <FaChalkboardTeacher />
          </div>
          <h2>{teacher.fullName}</h2>
          <span className={styles.subjectBadge}>{teacher.subject}</span>
        </div>

        <div className={styles.details}>
          <Detail label="Email" value={teacher.email} />
          <Detail label="Phone" value={teacher.phone} />
          <Detail label="Subject" value={teacher.subject} />
          <Detail
            label="Class Teacher Of"
            value={teacher.classTeacherOf || "—"}
          />
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
