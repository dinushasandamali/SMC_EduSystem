package com.backend.backend.controller;

import com.backend.backend.model.TimeTable;
import com.backend.backend.model.TimeTablePeriod;
import com.backend.backend.service.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timetables")
@CrossOrigin(origins = "http://localhost:3000")
public class TimeTableController {

    @Autowired
    private TimeTableService timeTableService;

    // Get timetable by class id
    @GetMapping("/class/{classId}")
    public Optional<TimeTable> getTimeTableByClassId(@PathVariable Long classId) {
        return timeTableService.getTimeTableByClassId(classId);
    }

    // Get all periods for a timetable
    @GetMapping("/{timetableId}/periods")
    public List<TimeTablePeriod> getPeriods(@PathVariable Long timetableId) {
        return timeTableService.getPeriodsByTimeTableId(timetableId);
    }

    // Add or update a period
    @PostMapping("/periods")
    public TimeTablePeriod savePeriod(@RequestBody TimeTablePeriod period) {
        return timeTableService.savePeriod(period);
    }

    @DeleteMapping("/periods/{id}")
    public void deletePeriod(@PathVariable Long id) {
        timeTableService.deletePeriod(id);
    }
}
