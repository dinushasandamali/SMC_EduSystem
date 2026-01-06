//package com.backend.backend.repository;
//
//import com.backend.backend.model.Attendance;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Repository
//public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
//
//    // Optional: Find all attendance records of a student
//    List<Attendance> findByStudentStudentId(Long studentId);
//
//    // Optional: Find attendance by date
//    List<Attendance> findByDate(LocalDate date);
//}
