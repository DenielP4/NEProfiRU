package com.example.neprofiru.controller;

import com.example.neprofiru.entities.Teacher;
import com.example.neprofiru.entities.User;
import com.example.neprofiru.models.TeacherInput;
import com.example.neprofiru.server.TeacherService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/teachers")
    public List<User> getTeachers(){
        return teacherService.getAll();
    }

    @GetMapping("/teacher/info")
    public Teacher getTeacherInfo(){
        return  teacherService.getCurrentTeacher();
    }
    @PostMapping("/teacher/info")
    public Teacher setTeacherInfo(@ModelAttribute TeacherInput teacherInput){
        return  teacherService.updateTeacher(teacherInput);
    }
    @GetMapping("/teachers/{teacherId}")
    public User getTeacherById(@PathVariable ObjectId teacherId){
        return teacherService.findById(teacherId);
    }
}
