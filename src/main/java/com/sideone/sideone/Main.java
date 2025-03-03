package com.sideone.sideone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        openBrowser();
    }

    public static void openBrowser() {
        String os = System.getProperty("os.name").toLowerCase();

        try {
            String url = "http://localhost:8080";
            ProcessBuilder processBuilder;

            if (os.contains("win")) {
                // Windows
                processBuilder = new ProcessBuilder("cmd", "/c", "start", url);
            } else if (os.contains("mac")) {
                // macOS
                processBuilder = new ProcessBuilder("open", url);
            } else if (os.contains("nix") || os.contains("nux")) {
                // Linux
                processBuilder = new ProcessBuilder("xdg-open", url);
            } else {
                throw new UnsupportedOperationException("Unsupported OS: " + os);
            }

            processBuilder.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
