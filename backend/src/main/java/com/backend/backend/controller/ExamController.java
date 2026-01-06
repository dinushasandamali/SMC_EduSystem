package com.backend.backend.controller;

import com.backend.backend.model.Exam;
import com.backend.backend.service.ExamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin
public class ExamController {

    private final ExamService service;

    public ExamController(ExamService service) {
        this.service = service;
    }

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return service.saveExam(exam);
    }

    @GetMapping
    public List<Exam> getAllExams() {
        return service.getAllExams();
    }

    @GetMapping("/{id}")
    public Exam getExamById(@PathVariable Long id) {
        return service.getExamById(id);
    }

    @PutMapping("/{id}")
    public Exam updateExam(@PathVariable Long id, @RequestBody Exam exam) {
        return service.updateExam(id, exam);
    }

    @DeleteMapping("/{id}")
    public void deleteExam(@PathVariable Long id) {
        service.deleteExam(id);
    }
}
