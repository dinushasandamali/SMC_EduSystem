package com.backend.backend.service;

import com.backend.backend.model.Subject;
import com.backend.backend.repository.SubjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository repository;

    public SubjectService(SubjectRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Subject saveSubject(Subject subject) {
        return repository.save(subject);
    }

    // READ ALL
    public List<Subject> getAllSubjects() {
        return repository.findAll();
    }

    // READ BY ID
    public Subject getSubjectById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // UPDATE
    public Subject updateSubject(Long id, Subject subject) {
        Subject existing = repository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(subject.getName());
            existing.setStream(subject.getStream());
            return repository.save(existing);
        }
        return null;
    }

    // DELETE
    public void deleteSubject(Long id) {
        repository.deleteById(id);
    }
}
