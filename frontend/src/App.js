import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [topicInput, setTopicInput] = useState('');
  const [topicQuestion, setTopicQuestion] = useState('');
  const [score, setScore] = useState(0);

  const headers = {"Access-Control-Allow-Origin": "*"};

  const loadTopics = useCallback(() => {
    Axios.get('http://localhost:8080/controller/getTopics', {headers: headers}).then((response) => {
      console.log(response)
      setTopics(response.data);
    }).catch((error) => {
    });
  }, []);

  const sendSurvey = useCallback(() => {
    const survey = {'topicName': topicInput, 'topicQuestion': topicQuestion}
    Axios.post('http://localhost:8080/controller/postTopic', survey).then((response) => {
      window.alert("Başarıyla kaydoldu");
      document.getElementById("topic").value = "";
      document.getElementById("question").value = "";
      loadTopics();
    })
  })

  useEffect(() => {
    loadTopics();
  }, [loadTopics]);

  const test = (i) => {
    const selectedTopic = topics.find(topic => topic.id == i);
    console.log(selectedTopic, i);
    setSelectedTopic(selectedTopic);
  }

  return (
    <div style={{ textAlign: 'center' }}>

      <div className="createSurvey">
        <h1 style={{ textAlign: 'center' }}>Create Survey</h1>
        <div className='surveyField'>
          <label htmlFor="topic">Topic</label><br />
          <input id="topic" onChange={(i) => setTopicInput(i.target.value)} />
        </div>
        <div className='surveyField'>
          <label htmlFor="question">Question</label><br />
          <textarea id="question" rows="10" cols="50" onChange={(i) => setTopicQuestion(i.target.value)}></textarea>
          {/* <input className="question" id="question" onChange={(i) => setTopicQuestion(i.target.value)} /> */}
        </div>
        <button onClick={sendSurvey}>Create Survey</button>
      </div>

      {topics.length > 0 &&
        <div className="submitSurvey">
          <h1 style={{ textAlign: 'center' }}>Submit Survey</h1>
          <select placeholder="Choose Option" name="bilgi" onChange={(i) => setSelectedTopic(topics.find(topic => topic.id == i.target.value))}>
            <option value="" disabled selected >Please Choose...</option>
            {topics.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.topicName}</option>
            ))}
          </select>

          {selectedTopic && <div>
            <h4>{selectedTopic && selectedTopic.topicQuestion}</h4>
            <button onClick={() => setScore(1)}>1</button>
            <button onClick={() => setScore(2)}>2</button>
            <button onClick={() => setScore(3)}>3</button>
            <button onClick={() => setScore(4)}>4</button>
            <button onClick={() => setScore(5)}>5</button>
            <button onClick={() => setScore(6)}>6</button>
            <button onClick={() => setScore(7)}>7</button>
            <button onClick={() => setScore(8)}>8</button>
            <button onClick={() => setScore(9)}>9</button>
            <button onClick={() => setScore(10)}>10</button>
          </div>} 
        </div>}
      <div style={{ width: "100%" }}></div>
    </div>
  );
}

export default App;
