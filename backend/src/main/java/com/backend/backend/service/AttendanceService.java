//package com.backend.backend.service;
//
//import com.backend.backend.model.Attendance;
//import com.backend.backend.repository.AttendanceRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class AttendanceService {
//
//    private final AttendanceRepository repository;
//
//    public AttendanceService(AttendanceRepository repository) {
//        this.repository = repository;
//    }
//
//    // CREATE
//    public Attendance saveAttendance(Attendance attendance) {
//        return repository.save(attendance);
//    }
//
//    // READ ALL
//    public List<Attendance> getAllAttendance() {
//        return repository.findAll();
//    }
//
//    // READ BY ID
//    public Attendance getAttendanceById(Long id) {
//        return repository.findById(id).orElse(null);
//    }
//
//    // READ BY STUDENT
//    public List<Attendance> getAttendanceByStudentId(Long studentId) {
//        return repository.findByStudentStudentId(studentId);
//    }
//
//    // UPDATE
//    public Attendance updateAttendance(Long id, Attendance attendance) {
//        Attendance existing = repository.findById(id).orElse(null);
//        if (existing != null) {
//            existing.setStudent(attendance.getStudent());
//            existing.setDate(attendance.getDate());
//            existing.setPresent(attendance.isPresent());
//            return repository.save(existing);
//        }
//        return null;
//    }
//
//    // DELETE
//    public void deleteAttendance(Long id) {
//        repository.deleteById(id);
//    }
//}
