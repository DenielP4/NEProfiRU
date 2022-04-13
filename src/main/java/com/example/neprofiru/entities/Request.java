package com.example.neprofiru.entities;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@Document("request")
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Request implements Serializable {

    @Id
    private ObjectId id = ObjectId.get();
    private String text;
    private String date;
    private boolean learnInHome;
    private boolean learnInStudent;
    private boolean remote;

    private UserInfo userInfo;

    private String subject;


    public Request(String text, String date, boolean learnInHome, boolean learnInStudent, boolean remote, String subject, UserInfo userInfo) {
        this.text = text;
        this.date = date;
        this.learnInHome = learnInHome;
        this.learnInStudent = learnInStudent;
        this.remote = remote;
        this.subject = subject;
        this.userInfo = userInfo;
    }
}
