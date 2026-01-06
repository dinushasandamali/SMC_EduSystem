package com.backend.backend.service;

import com.backend.backend.model.Student;
import com.backend.backend.model.ClassRoom;
import com.backend.backend.repository.StudentRepository;
import com.backend.backend.repository.ClassRoomRepository;
import com.backend.backend.dto.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ClassRoomRepository classRoomRepository;

    // Convert entity to DTO
    private StudentDTO toDTO(Student student) {
        return new StudentDTO(
                student.getId(),
                student.getFullName(),
                student.getAdmissionNo(),
                student.getGender(),
                student.getDateOfBirth(),
                student.getStartDate(),
                student.getEndDate(),
                student.getClassRoom() != null ? student.getClassRoom().getId() : null
        );
    }

    // Convert DTO to entity (for create or update)
    private Student fromDTO(StudentDTO dto) {
        Student student = new Student();
        if (dto.getId() != null) {
            student.setId(dto.getId());
        }
        student.setFullName(dto.getFullName());
        student.setAdmissionNo(dto.getAdmissionNo());
        student.setGender(dto.getGender());
        student.setDateOfBirth(dto.getDateOfBirth());
        student.setStartDate(dto.getStartDate());
        student.setEndDate(dto.getEndDate());

        if (dto.getClassRoomId() != null) {
            ClassRoom cls = classRoomRepository.findById(dto.getClassRoomId())
                    .orElseThrow(() -> new RuntimeException("Class not found"));
            student.setClassRoom(cls);
        }

        return student;
    }

    // Get all students
    public List<StudentDTO> getAllStudents() {
        return studentRepository.findAll().stream().map(this::toDTO).toList();
    }

    // Get student by ID
    public Optional<StudentDTO> getStudentById(Long id) {
        return studentRepository.findById(id).map(this::toDTO);
    }

    // Create or update student
    public StudentDTO saveStudent(StudentDTO dto) {
        Student student = fromDTO(dto);
        Student saved = studentRepository.save(student);
        return toDTO(saved);
    }

    // Delete student
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
