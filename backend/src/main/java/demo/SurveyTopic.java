/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 *
 * @author dogukansahinturk
 */
@Entity
public class SurveyTopic {
    @Id
    @GeneratedValue
    private int id;
 
    private String topicName;
    
    private String topicQuestion;
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getTopicQuestion() {
        return topicQuestion;
    }

    public void setTopicQuestion(String topicQuestion) {
        this.topicQuestion = topicQuestion;
    }
    
}

    

