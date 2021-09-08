import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/index';
import Card from './components/Card'

function App() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {

    axios.get(`${BASE_URL}?api_key=${API_KEY}&count=25`)
    .then(res => {
      // console.log(res.data);
      setPlanets(res.data);
    })
    .catch(error => console.log(error));
  },[])


  return (
    <div className="App">
     {planets.map(planet => {
       return <Card hdurl={planet.hdurl} 
                    title={planet.title}
                    explanation={planet.explanation}
                    date={planet.date}
                    copyright={planet.copyright} />
       })}
    </div>
  );
}

export default App;
