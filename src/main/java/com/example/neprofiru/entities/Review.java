package com.example.neprofiru.entities;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Review {
    public Review(String message) {
        this.message = message;
    }

    @Id
    ObjectId id = ObjectId.get();

    private UserInfo userInfo;
    private String message;
    private String date = new Date().toLocaleString();
}
