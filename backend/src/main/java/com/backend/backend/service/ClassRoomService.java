// ClassRoomService.java
package com.backend.backend.service;

import com.backend.backend.model.ClassRoom;
import com.backend.backend.model.Teacher;
import com.backend.backend.repository.ClassRoomRepository;
import com.backend.backend.repository.TeacherRepository;
import com.backend.backend.dto.ClassRoomDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassRoomService {

    @Autowired
    private ClassRoomRepository classRoomRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    public ClassRoom createClassRoom(ClassRoomDTO dto) {
        ClassRoom cls = new ClassRoom();
        cls.setName(dto.getName());
        cls.setGrade(dto.getGrade());

        // Optional teacher assignment
        if (dto.getTeacherId() != null) {
            Teacher teacher = teacherRepository.findById(dto.getTeacherId())
                    .orElseThrow(() -> new RuntimeException("Teacher not found"));
            cls.setTeacher(teacher);
        }

        return classRoomRepository.save(cls);
    }
}
