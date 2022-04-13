package com.example.neprofiru.server;

import com.example.neprofiru.entities.User;
import com.example.neprofiru.models.ChangeUserModel;
import com.example.neprofiru.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User changeUser(ChangeUserModel userModel){
        if (userModel.getEmail()==null) return null;
        User user = userRepository.findByEmail(userModel.getEmail()).orElse(null);
        if (user == null) return null;
        System.out.println(userModel.getRoles());
        if (userModel.getRoles()!=null) user.setRoles(userModel.getRoles());

        return userRepository.save(user);
    }
}
