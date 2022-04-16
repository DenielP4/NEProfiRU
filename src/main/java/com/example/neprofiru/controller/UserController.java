package com.example.neprofiru.controller;

import com.example.neprofiru.entities.User;
import com.example.neprofiru.models.UserInput;
import com.example.neprofiru.server.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user/info")
    public User getUserInfo(){
        return userService.findByEmail(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
    }
    @PostMapping("/user/info")
    public User setUserInfo(@RequestBody UserInput userInput){
        return userService.updateUser(userInput);
    }
}
