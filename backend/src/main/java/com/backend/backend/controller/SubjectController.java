package com.backend.backend.controller;

import com.backend.backend.model.Subject;
import com.backend.backend.service.SubjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin
public class SubjectController {

    private final SubjectService service;

    public SubjectController(SubjectService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public Subject createSubject(@RequestBody Subject subject) {
        return service.saveSubject(subject);
    }

    // READ ALL
    @GetMapping
    public List<Subject> getAllSubjects() {
        return service.getAllSubjects();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public Subject getSubjectById(@PathVariable Long id) {
        return service.getSubjectById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Subject updateSubject(@PathVariable Long id, @RequestBody Subject subject) {
        return service.updateSubject(id, subject);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteSubject(@PathVariable Long id) {
        service.deleteSubject(id);
    }
}
