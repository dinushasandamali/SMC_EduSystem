package com.backend.backend.repository;

import com.backend.backend.model.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {
    Optional<TimeTable> findByClassRoomId(Long classRoomId);
}
