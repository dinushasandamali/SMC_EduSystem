package com.backend.backend.controller;

import com.backend.backend.model.User;
import com.backend.backend.repository.UserRepository;
import com.backend.backend.config.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        // Allow login with either username or email
        User dbUser = null;
        if (user.getUsername() != null && !user.getUsername().isEmpty()) {
            dbUser = userRepository.findByUsername(user.getUsername());
        } else if (user.getEmail() != null && !user.getEmail().isEmpty()) {
            dbUser = userRepository.findByEmail(user.getEmail());
        }

        Map<String, Object> response = new HashMap<>();

        if (dbUser != null && passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            String token = jwtUtil.generateToken(dbUser.getUsername(), dbUser.getRole());
            response.put("token", token);
            response.put("role", dbUser.getRole());
            return response;
        }

        response.put("error", "Invalid username/email or password");
        return response;
    }
}
