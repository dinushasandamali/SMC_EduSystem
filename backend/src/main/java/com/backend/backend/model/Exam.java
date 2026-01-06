package com.backend.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "exams")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examId;

    private String name;       // e.g., Midterm, Final, Quarterly
    private LocalDate date;

    private int grade;         // 6 - 13
    private String stream;     // Commerce, Arts, Maths, Bio, Agri

    // Constructors
    public Exam() {}

    public Exam(String name, LocalDate date, int grade, String stream) {
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.stream = stream;
    }

    // Getters & Setters
    public Long getExamId() {
        return examId;
    }

    public void setExamId(Long examId) {
        this.examId = examId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }
}
