//package com.backend.backend.controller;
//
//import com.backend.backend.model.Mark;
//import com.backend.backend.service.MarkService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/marks")
//@CrossOrigin
//public class MarkController {
//
//    private final MarkService service;
//
//    public MarkController(MarkService service) {
//        this.service = service;
//    }
//
//    // CREATE
//    @PostMapping
//    public Mark createMark(@RequestBody Mark mark) {
//        return service.saveMark(mark);
//    }
//
//    // READ ALL
//    @GetMapping
//    public List<Mark> getAllMarks() {
//        return service.getAllMarks();
//    }
//
//    // READ BY ID
//    @GetMapping("/{id}")
//    public Mark getMarkById(@PathVariable Long id) {
//        return service.getMarkById(id);
//    }
//
//    // READ BY STUDENT
//    @GetMapping("/student/{id}")
//    public List<Mark> getMarksByStudent(@PathVariable Long studentId) {
//        return service.getMarksByStudent(studentId);
//    }
//
//    // READ BY EXAM
//    @GetMapping("/exam/{examId}")
//    public List<Mark> getMarksByExam(@PathVariable Long examId) {
//        return service.getMarksByExam(examId);
//    }
//
//    // UPDATE
//    @PutMapping("/{id}")
//    public Mark updateMark(@PathVariable Long id, @RequestBody Mark mark) {
//        return service.updateMark(id, mark);
//    }
//
//    // DELETE
//    @DeleteMapping("/{id}")
//    public void deleteMark(@PathVariable Long id) {
//        service.deleteMark(id);
//    }
//}
