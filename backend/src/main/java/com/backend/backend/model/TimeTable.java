package com.backend.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "timetables")
public class TimeTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "classroom_id")
    private ClassRoom classRoom;

    @OneToMany(mappedBy = "timeTable", cascade = CascadeType.ALL)
    private List<TimeTablePeriod> periods;

    public TimeTable() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public ClassRoom getClassRoom() { return classRoom; }
    public void setClassRoom(ClassRoom classRoom) { this.classRoom = classRoom; }

    public List<TimeTablePeriod> getPeriods() { return periods; }
    public void setPeriods(List<TimeTablePeriod> periods) { this.periods = periods; }
}
