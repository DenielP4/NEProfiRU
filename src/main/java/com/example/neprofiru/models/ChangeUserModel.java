package com.example.neprofiru.models;

import com.example.neprofiru.entities.Role;
import lombok.Data;

import java.util.List;

@Data
public class ChangeUserModel {
    private String email;
    private List<Role> roles;
}
