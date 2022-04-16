package com.example.neprofiru.server;


import com.example.neprofiru.entities.User;
import com.example.neprofiru.entities.UserInfo;
import com.example.neprofiru.models.UserInput;
import com.example.neprofiru.repository.TeacherRepository;
import com.example.neprofiru.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.List;

@Service
public class UserService  {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TeacherRepository teacherRepository;


    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();


    public User findByEmail(String email){
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(MessageFormat.format("com.example.demo.User.User with email {0} cannot be found.", email)));
    }

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User updateUser(UserInput userInput){
        User user = getCurrentUser();
        UserInfo userInfo = new UserInfo(userInput.getFirstName(),
                userInput.getMiddleName(),
                userInput.getLastName(),
                userInput.getAge(),
                userInput.getPhone(),
                userInput.getTown(),
                userInput.isViber(),
                userInput.isTelegram(),
                userInput.isWhatsApp());
        user.setUserInfo(userInfo);
        String cryptedPassword = bCryptPasswordEncoder.encode(userInput.getPassword());
        user.setPassword(cryptedPassword);
        return userRepository.save(user);
    }

    public User getCurrentUser(){
        return findByEmail(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
    }

    public void save(User user){
        userRepository.save(user);
    }
}
