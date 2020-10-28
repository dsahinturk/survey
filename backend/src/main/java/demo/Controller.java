/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dogukansahinturk
 */

@RestController
@RequestMapping("/controller")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller {
    
    @Autowired
    public Service service;
    
    @Autowired
    public TopicsRepository topicsRepository;
    
    
    @GetMapping("/getTopics")
    public List<SurveyTopic> getTopics() {
        List<SurveyTopic> topics = StreamSupport
                .stream(this.topicsRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        System.out.println(topics);
        return topics;
    }
    
    @PostMapping("/postTopic")
    public SurveyTopic postTopic(@RequestBody SurveyTopic surveyTopic) {
        return this.topicsRepository.save(surveyTopic);
    }
    
}
