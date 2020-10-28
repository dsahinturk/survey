/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


/**
 *
 * @author dogukansahinturk
 */
@Repository
public interface TopicsRepository extends CrudRepository<SurveyTopic, Integer>{
    
}
