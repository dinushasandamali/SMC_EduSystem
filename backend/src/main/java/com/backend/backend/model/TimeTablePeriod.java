package com.backend.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "timetable_periods")
public class TimeTablePeriod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String day;           // Monday, Tuesday, ...

    private Integer periodNumber; // 1-8
    private String subject;
    private Long teacherId;       // only teacher's ID

    private String startTime;     // e.g., "07:30"
    private String endTime;       // e.g., "08:10"

    @ManyToOne
    @JoinColumn(name = "timetable_id")
    private TimeTable timeTable;

    public TimeTablePeriod() {}

    public TimeTablePeriod(String day, Integer periodNumber, String subject, Long teacherId) {
        this.day = day;
        this.periodNumber = periodNumber;
        this.subject = subject;
        this.teacherId = teacherId;
        calculatePeriodTimes();
    }

    // Auto-calculate start and end times
    public void calculatePeriodTimes() {
        if (periodNumber == null) return;

        int startHour = 7;
        int startMinute = 30;
        int minutesFromStart = (periodNumber - 1) * 40;

        if (periodNumber > 4) minutesFromStart += 20; // break after period 4

        int totalMinutes = startMinute + minutesFromStart;
        int hour = startHour + (totalMinutes / 60);
        int minute = totalMinutes % 60;
        this.startTime = String.format("%02d:%02d", hour, minute);

        int endTotalMinutes = totalMinutes + 40;
        int endHour = startHour + (endTotalMinutes / 60);
        int endMinute = endTotalMinutes % 60;
        this.endTime = String.format("%02d:%02d", endHour, endMinute);
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDay() { return day; }
    public void setDay(String day) { this.day = day; }

    public Integer getPeriodNumber() { return periodNumber; }
    public void setPeriodNumber(Integer periodNumber) {
        this.periodNumber = periodNumber;
        calculatePeriodTimes();
    }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public Long getTeacherId() { return teacherId; }
    public void setTeacherId(Long teacherId) { this.teacherId = teacherId; }

    public String getStartTime() { return startTime; }
    public void setStartTime(String startTime) { this.startTime = startTime; }

    public String getEndTime() { return endTime; }
    public void setEndTime(String endTime) { this.endTime = endTime; }

    public TimeTable getTimeTable() { return timeTable; }
    public void setTimeTable(TimeTable timeTable) { this.timeTable = timeTable; }
}
