import './App.css';
import React, {useEffect, useState} from 'react'; 
import api from './utils/api';

function App() {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    api.get('/').then(response => {setInstructors(response.data)});
  }, []);


  return (
    <div className="App">
      <div className="App-header">
        <ul>
          {
            instructors.map(p => (
              <li key={p.name}>
                <p>{p.name}: {p.role}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
