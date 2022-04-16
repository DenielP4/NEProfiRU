package com.example.neprofiru.models;

import lombok.Data;

@Data
public class UserInput {
    private String firstName;
    private String middleName;
    private String lastName;
    private String town;
    private String phone;
    private boolean telegram;
    private boolean whatsApp;
    private boolean viber;
    private int age;
    private String email;
    private String password;

    private boolean teacher;
    private TeacherInput teacherInput;
}
