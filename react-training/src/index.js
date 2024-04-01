import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from './day1/Greeting';
import reportWebVitals from './reportWebVitals';
import UserCard from './day1/UserCard';
import Weather from './day1/Weather';
import Counter from './day1/Counter';
import TaskList from './day1/TaskList';
import Button from './day1/Button';
import Counter2 from './day2/Counter2';
import PersonForm from './day2/PersonForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting />
    <UserCard name={"Varun"} email="varun@gmail.com" avatarURL={"https://upload.wikimedia.org/wikipedia/commons/a/ac/NewTux.png"}/>
    <UserCard name={"Tarun"} email="tarun@gmail.com" avatarURL={"https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"}/>
    <UserCard name={"Arun"} email="arun@gmail.com" avatarURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxVdJ8MFiC6hxzr1TAcovtKJKvoZrGZAnyC36-v1XRA&s"}/>
    <Weather temp={"29"} />
    <Counter/>
    <TaskList
     tasks={[
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
]} />
   <Button colour={"blue"} text={"press"}></Button>
   <Button colour={"green"} text={"press"}></Button>

   <Counter2 />
   <PersonForm />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
