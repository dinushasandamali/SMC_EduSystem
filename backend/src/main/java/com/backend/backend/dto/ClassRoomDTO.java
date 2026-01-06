package com.backend.backend.dto;

public class ClassRoomDTO {

    private Long id;
    private String name;
    private Integer grade;
    private Long teacherId; // optional

    public ClassRoomDTO() {}

    public ClassRoomDTO(Long id, String name, Integer grade, Long teacherId) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.teacherId = teacherId;
    }

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getGrade() { return grade; }
    public void setGrade(Integer grade) { this.grade = grade; }

    public Long getTeacherId() { return teacherId; }
    public void setTeacherId(Long teacherId) { this.teacherId = teacherId; }
}
