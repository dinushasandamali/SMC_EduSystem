package com.backend.backend.service;

import com.backend.backend.model.TimeTablePeriod;
import com.backend.backend.repository.TimeTablePeriodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeTablePeriodService {

    @Autowired
    private TimeTablePeriodRepository periodRepository;

    public List<TimeTablePeriod> getAllPeriods() {
        return periodRepository.findAll();
    }

    public List<TimeTablePeriod> getPeriodsByTimeTable(Long timetableId) {
        return periodRepository.findByTimeTableId(timetableId);
    }

    public Optional<TimeTablePeriod> getPeriodById(Long id) {
        return periodRepository.findById(id);
    }

    public TimeTablePeriod savePeriod(TimeTablePeriod period) {
        return periodRepository.save(period);
    }

    public void deletePeriod(Long id) {
        periodRepository.deleteById(id);
    }
}
