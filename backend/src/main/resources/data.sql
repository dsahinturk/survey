/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  dogukansahinturk
 * Created: Oct 28, 2020
 */

DROP TABLE IF EXISTS survey_Topic;
 
CREATE TABLE survey_Topic (
  id INT PRIMARY KEY,
  topic_Name VARCHAR(250),
  topic_Question VARCHAR(500)
);
 
