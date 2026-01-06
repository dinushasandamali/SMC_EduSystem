package com.backend.backend.controller;

import com.backend.backend.dto.ClassRoomDTO;
import com.backend.backend.model.ClassRoom;
import com.backend.backend.model.Teacher;
import com.backend.backend.repository.ClassRoomRepository;
import com.backend.backend.repository.TeacherRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/classrooms")
@CrossOrigin(origins = "http://localhost:3000")
public class ClassRoomController {

    private final ClassRoomRepository classRoomRepository;
    private final TeacherRepository teacherRepository;

    public ClassRoomController(
            ClassRoomRepository classRoomRepository,
            TeacherRepository teacherRepository
    ) {
        this.classRoomRepository = classRoomRepository;
        this.teacherRepository = teacherRepository;
    }

    // ---------------- CREATE ----------------
    @PostMapping
    public ResponseEntity<ClassRoomDTO> createClassRoom(@RequestBody ClassRoomDTO dto) {

        ClassRoom classroom = new ClassRoom();
        classroom.setName(dto.getName());
        classroom.setGrade(dto.getGrade());

        if (dto.getTeacherId() != null) {
            Teacher teacher = teacherRepository
                    .findById(dto.getTeacherId())
                    .orElseThrow(() -> new RuntimeException("Teacher not found"));
            classroom.setTeacher(teacher);
        }

        ClassRoom saved = classRoomRepository.save(classroom);

        return ResponseEntity.ok(toDTO(saved));
    }

    // ---------------- GET ALL ----------------
    @GetMapping
    public List<ClassRoomDTO> getAllClassRooms() {
        return classRoomRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // ---------------- GET BY ID ----------------
    @GetMapping("/{id}")
    public ResponseEntity<ClassRoomDTO> getById(@PathVariable Long id) {
        ClassRoom classroom = classRoomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Classroom not found"));

        return ResponseEntity.ok(toDTO(classroom));
    }

    // ---------------- UPDATE ----------------
    @PutMapping("/{id}")
    public ResponseEntity<ClassRoomDTO> updateClassRoom(
            @PathVariable Long id,
            @RequestBody ClassRoomDTO dto
    ) {

        ClassRoom classroom = classRoomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Classroom not found"));

        classroom.setName(dto.getName());
        classroom.setGrade(dto.getGrade());

        if (dto.getTeacherId() != null) {
            Teacher teacher = teacherRepository
                    .findById(dto.getTeacherId())
                    .orElseThrow(() -> new RuntimeException("Teacher not found"));
            classroom.setTeacher(teacher);
        } else {
            classroom.setTeacher(null);
        }

        return ResponseEntity.ok(toDTO(classRoomRepository.save(classroom)));
    }

    // ---------------- DELETE ----------------
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClassRoom(@PathVariable Long id) {
        classRoomRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // ---------------- MAPPER ----------------
    private ClassRoomDTO toDTO(ClassRoom classroom) {
        return new ClassRoomDTO(
                classroom.getId(),
                classroom.getName(),
                classroom.getGrade(),
                classroom.getTeacher() != null ? classroom.getTeacher().getId() : null
        );
    }
}
