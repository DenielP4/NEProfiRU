package com.example.neprofiru.repository;


import com.example.neprofiru.entities.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    Optional<User> findByEmail(String email);
    List<User> getAllByTeacherIsNotNull();
    User getUserByTeacherIsNotNullAndId(ObjectId objectId);
}
