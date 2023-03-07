import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDo from './todo';
import {TodoTest, StateDemoTest} from './TodoTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ul>
      <ToDo content="函数式组件传参" from="多参数from"></ToDo>
      <TodoTest content="类组件传参"></TodoTest>
    </ul>
    <StateDemoTest></StateDemoTest>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
