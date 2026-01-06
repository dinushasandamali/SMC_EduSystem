package com.backend.backend.service;

import com.backend.backend.model.Exam;
import com.backend.backend.repository.ExamRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    private final ExamRepository repository;

    public ExamService(ExamRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Exam saveExam(Exam exam) {
        return repository.save(exam);
    }

    // READ ALL
    public List<Exam> getAllExams() {
        return repository.findAll();
    }

    // READ BY ID
    public Exam getExamById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // UPDATE
    public Exam updateExam(Long id, Exam exam) {
        Exam existing = repository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(exam.getName());
            existing.setDate(exam.getDate());
            existing.setGrade(exam.getGrade());
            existing.setStream(exam.getStream());
            return repository.save(existing);
        }
        return null;
    }

    // DELETE
    public void deleteExam(Long id) {
        repository.deleteById(id);
    }
}
