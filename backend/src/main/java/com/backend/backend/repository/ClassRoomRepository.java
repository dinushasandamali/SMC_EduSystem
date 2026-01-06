package com.backend.backend.repository;

import com.backend.backend.model.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {
    // Basic CRUD methods are inherited from JpaRepository
}
