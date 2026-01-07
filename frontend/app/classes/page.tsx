"use client";

import { useEffect, useState } from "react";
import ClassForm from "@/components/ClassForm";
import ClassTable from "@/components/ClassTable";
import { ClassRoom } from "@/types/ClassRoom";
import styles from "@/styles/classes.module.css";

const API_URL = "http://localhost:8081/api/classrooms";

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassRoom[]>([]);
  const [editingClass, setEditingClass] = useState<ClassRoom | null>(null);

  // 🔹 Fetch classes from backend
  const fetchClasses = async () => {
    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error("Failed to fetch classrooms");
      }

      const data = await res.json();
      console.log("Classes from backend:", data); // 👈 DEBUG

      // Ensure backend returns an array
      setClasses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch classes:", err);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // 🔹 Save or update class
  const handleSave = async (cls: ClassRoom) => {
    try {
      if (editingClass) {
        // UPDATE
        await fetch(`${API_URL}/${editingClass.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cls),
        });
        setEditingClass(null);
      } else {
        // CREATE
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cls),
        });
      }

      fetchClasses(); // reload table
    } catch (err) {
      console.error("Failed to save class:", err);
    }
  };

  // 🔹 Delete class
  const handleDelete = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      fetchClasses();
    } catch (err) {
      console.error("Failed to delete class:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Class Management</h1>

        <div className={styles.formWrapper}>
          <ClassForm
            onSubmit={handleSave}
            initialData={editingClass}
          />
        </div>

        <ClassTable
          classes={classes}
          onEdit={setEditingClass}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
