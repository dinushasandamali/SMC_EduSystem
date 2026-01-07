"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Student {
  id: number;
  fullName: string;
}

interface ClassRoom {
  id: number;
  name: string;
  grade: number;
  classTeacher: string;
  students: Student[];
}

export default function ClassProfilePage() {
  const { id } = useParams();
  const [cls, setCls] = useState<ClassRoom | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/classrooms/${id}`)
      .then(res => res.json())
      .then(data => setCls(data));
  }, [id]);

  if (!cls) return <p>Loading...</p>;

  return (
    <div className="profile-card">
      <h1>Class Profile</h1>
      <p><b>Class Name:</b> {cls.name}</p>
      <p><b>Grade:</b> {cls.grade}</p>
      {/* <p><b>Class Teacher:</b> {cls.classTeacher}</p> */}

      {/* <h3>Students</h3>
      <ul>
        {cls.students.map(s => (
          <li key={s.id}>{s.fullName}</li>
        ))}
      </ul> */}
    </div>
  );
}
