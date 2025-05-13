package com.buashraf.fullstack_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")                        // all paths
                .allowedOrigins("http://localhost:3000")  // your React origin
                .allowedMethods("GET","POST","PUT","DELETE","OPTIONS");
    }
}