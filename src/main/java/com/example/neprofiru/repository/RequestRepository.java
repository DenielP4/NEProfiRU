package com.example.neprofiru.repository;

import com.example.neprofiru.entities.Request;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequestRepository extends MongoRepository<Request, ObjectId> {

}
