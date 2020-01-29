import React, {useState} from 'react';
import './App.css';

function App() {
  let memberList = useState([
    {name:"Logan V", role:"React I", email:"loganvan@att.net"},
    {name:"Joshua A", role:"Backend Engineer", email:"joshuaa@gmail.com"}
  ]);

  return (
    <div className="App">
      {memberList[0].map((i)=>
        {
          return <p key={i.email}>{i.name}, {i.role} at {i.email}</p>;
        })}
    </div>
  );
}

export default App;
