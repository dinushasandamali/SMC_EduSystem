//package com.backend.backend.controller;
//
//import com.backend.backend.model.Attendance;
//import com.backend.backend.service.AttendanceService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/attendance")
//@CrossOrigin
//public class AttendanceController {
//
//    private final AttendanceService service;
//
//    public AttendanceController(AttendanceService service) {
//        this.service = service;
//    }
//
//    // CREATE
//    @PostMapping
//    public Attendance createAttendance(@RequestBody Attendance attendance) {
//        return service.saveAttendance(attendance);
//    }
//
//    // READ ALL
//    @GetMapping
//    public List<Attendance> getAllAttendance() {
//        return service.getAllAttendance();
//    }
//
//    // READ BY ID
//    @GetMapping("/{id}")
//    public Attendance getAttendanceById(@PathVariable Long id) {
//        return service.getAttendanceById(id);
//    }
//
//    // READ BY STUDENT
//    @GetMapping("/student/{studentId}")
//    public List<Attendance> getAttendanceByStudent(@PathVariable Long studentId) {
//        return service.getAttendanceByStudentId(studentId);
//    }
//
//    // UPDATE
//    @PutMapping("/{id}")
//    public Attendance updateAttendance(@PathVariable Long id, @RequestBody Attendance attendance) {
//        return service.updateAttendance(id, attendance);
//    }
//
//    // DELETE
//    @DeleteMapping("/{id}")
//    public void deleteAttendance(@PathVariable Long id) {
//        service.deleteAttendance(id);
//    }
//}
