package com.backend.backend.dto;

import java.time.LocalDate;

public class StudentDTO {
    private Long id;
    private String fullName;
    private String admissionNo;
    private String gender;
    private LocalDate dateOfBirth;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long classRoomId; // only ID of classroom

    // Constructors
    public StudentDTO() {}

    public StudentDTO(Long id, String fullName, String admissionNo, String gender,
                      LocalDate dateOfBirth, LocalDate startDate, LocalDate endDate,
                      Long classRoomId) {
        this.id = id;
        this.fullName = fullName;
        this.admissionNo = admissionNo;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.startDate = startDate;
        this.endDate = endDate;
        this.classRoomId = classRoomId;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getAdmissionNo() { return admissionNo; }
    public void setAdmissionNo(String admissionNo) { this.admissionNo = admissionNo; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public LocalDate getStartDate() { return startDate; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

    public LocalDate getEndDate() { return endDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }

    public Long getClassRoomId() { return classRoomId; }
    public void setClassRoomId(Long classRoomId) { this.classRoomId = classRoomId; }
}
