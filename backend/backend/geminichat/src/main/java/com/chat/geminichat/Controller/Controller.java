package com.chat.geminichat.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chat.geminichat.Service.QnaService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/qna")
public class Controller {

    @Autowired
    private QnaService qnaService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload)
    {
        String question = payload.get("question");
        String answer=qnaService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
    
}
