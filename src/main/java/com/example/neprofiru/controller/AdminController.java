package com.example.neprofiru.controller;

import com.example.neprofiru.entities.User;
import com.example.neprofiru.models.ChangeUserModel;
import com.example.neprofiru.server.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/1")
    String getUserInfo() {
        return "I am ADMIN";
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return adminService.getAll();
    }

    @PatchMapping("/users")
    User changeUser(@RequestBody ChangeUserModel userModel){
        return adminService.changeUser(userModel);
    }
}
