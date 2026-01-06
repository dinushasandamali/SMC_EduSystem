package com.backend.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "classrooms")
public class ClassRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;      // e.g., "6A", "12B"
    private Integer grade;    // e.g., 6, 7, 8

    // Optional: one class can have one class teacher
    @OneToOne
    @JoinColumn(name = "teacher_id", nullable = true)
    private Teacher teacher;

    public ClassRoom() {}

    public ClassRoom(String name, Integer grade) {
        this.name = name;
        this.grade = grade;
    }

    // -------- Getters & Setters --------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
