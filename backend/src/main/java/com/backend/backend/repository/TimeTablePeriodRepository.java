package com.backend.backend.repository;

import com.backend.backend.model.TimeTablePeriod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeTablePeriodRepository extends JpaRepository<TimeTablePeriod, Long> {

    // Find all periods by timetable id
    List<TimeTablePeriod> findByTimeTableId(Long timeTableId);

    // Optional: Find all periods for a specific day and timetable
    List<TimeTablePeriod> findByTimeTableIdAndDay(Long timeTableId, String day);

}
