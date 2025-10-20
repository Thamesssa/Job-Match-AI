package com.jobmatch.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class JobMatchAiBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobMatchAiBackendApplication.class, args);
    }

}