import './App.css';
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

function App() {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    findInstructors()
  }, [instructors]);

  const findInstructors = async () => {
    const instru = await axios.get('http://localhost:3333')
    setInstructors(instru);
  }

  return (
    <div className="App">
      <ul>
        {instructors.map((p, i) => {
          <li>Team ${i+1} - ${p.name} | ${i.role}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
