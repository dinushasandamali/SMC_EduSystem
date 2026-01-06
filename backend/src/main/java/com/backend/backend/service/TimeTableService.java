package com.backend.backend.service;

import com.backend.backend.model.TimeTablePeriod;
import com.backend.backend.model.TimeTable;
import com.backend.backend.repository.TimeTablePeriodRepository;
import com.backend.backend.repository.TimeTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeTableService {

    @Autowired
    private TimeTableRepository timeTableRepository;

    @Autowired
    private TimeTablePeriodRepository periodRepository;

    // Get timetable by class id
    public Optional<TimeTable> getTimeTableByClassId(Long classId) {
        return timeTableRepository.findByClassRoomId(classId);
    }

    // Get all periods for a timetable
    public List<TimeTablePeriod> getPeriodsByTimeTableId(Long timetableId) {
        return periodRepository.findByTimeTableId(timetableId);
    }

    // Add or update a period
    public TimeTablePeriod savePeriod(TimeTablePeriod period) {
        return periodRepository.save(period);
    }

    // Delete a period
    public void deletePeriod(Long id) {
        periodRepository.deleteById(id);
    }
}
