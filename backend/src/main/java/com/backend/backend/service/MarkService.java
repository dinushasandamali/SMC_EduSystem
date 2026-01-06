//package com.backend.backend.service;
//
//import com.backend.backend.model.Mark;
//import com.backend.backend.repository.MarkRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class MarkService {
//
//    private final MarkRepository repository;
//
//    public MarkService(MarkRepository repository) {
//        this.repository = repository;
//    }
//
//    // CREATE
//    public Mark saveMark(Mark mark) {
//        return repository.save(mark);
//    }
//
//    // READ ALL
//    public List<Mark> getAllMarks() {
//        return repository.findAll();
//    }
//
//    // READ BY ID
//    public Mark getMarkById(Long id) {
//        return repository.findById(id).orElse(null);
//    }
//
//    // READ BY STUDENT
//    public List<Mark> getMarksByStudent(Long id) {
//        return repository.findByStudentStudentId(id);
//    }
//
//    // READ BY EXAM
//    public List<Mark> getMarksByExam(Long examId) {
//        return repository.findByExamExamId(examId);
//    }
//
//    // UPDATE
//    public Mark updateMark(Long id, Mark mark) {
//        Mark existing = repository.findById(id).orElse(null);
//        if (existing != null) {
//            existing.setStudent(mark.getStudent());
//            existing.setSubject(mark.getSubject());
//            existing.setExam(mark.getExam());
//            existing.setScore(mark.getScore());
//            return repository.save(existing);
//        }
//        return null;
//    }
//
//    // DELETE
//    public void deleteMark(Long id) {
//        repository.deleteById(id);
//    }
//}
