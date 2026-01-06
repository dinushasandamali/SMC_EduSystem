package com.backend.backend.service;

import com.backend.backend.model.Teacher;
import com.backend.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public Optional<Teacher> getTeacherById(Long id) {
        return teacherRepository.findById(id);
    }

    public Teacher createTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(Long id, Teacher updatedTeacher) {
        return teacherRepository.findById(id).map(t -> {
            t.setFullName(updatedTeacher.getFullName());
            t.setEmail(updatedTeacher.getEmail());
            t.setPhone(updatedTeacher.getPhone());
            t.setSubject(updatedTeacher.getSubject());
            t.setStartDate(updatedTeacher.getStartDate());
            t.setEndDate(updatedTeacher.getEndDate());
            t.setClassTeacherOf(updatedTeacher.getClassTeacherOf());
            return teacherRepository.save(t);
        }).orElseThrow(() -> new RuntimeException("Teacher not found"));
    }

    public void deleteTeacher(Long id) {
        teacherRepository.deleteById(id);
    }
}
