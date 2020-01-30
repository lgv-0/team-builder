import React, {useState} from 'react';
import './App.css';
import Form from "./Form";

function App() {
  const [memberList, sMemberList] = useState([
    {name:"Logan V", role:"React I", email:"loganvan@att.net"},
    {name:"Joshua A", role:"Backend Engineer", email:"joshuaa@gmail.com"}
  ]);

  function push(incClass)
  {
    let build = [];
    for (let i = 0; i < memberList.length; i++)
      build.push(memberList[i]);
    build.push(incClass);
    sMemberList(build);
  }

  return (
    <div className="App">
      <Form pushdata={push} />
      {memberList.map((i)=>
        {
          return <p key={i.email}>{i.name}, {i.role} at {i.email}</p>;
        })}
    </div>
  );
}

export default App;
