package com.example.neprofiru.repository;


import com.example.neprofiru.entities.Teacher;
import com.example.neprofiru.entities.UserInfo;
import org.bson.types.ObjectId;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherRepository extends MongoRepository<Teacher, ObjectId> {
    Teacher findTeacherByUserInfo(UserInfo userInfo);
}
