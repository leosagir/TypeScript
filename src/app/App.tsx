import React from 'react';
import './App.css'
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/loginForm';
import Counter from '../components/Counter/Counter';
import Feedback from '../components/Feedback/Feedback';

import Lesson04 from '../lessons/lesson06/Lesson04/Lesson04';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Lesson04 />
      <main>
        <h1>Hello, TypeScrypt</h1>
        <Counter />
        <LoginForm />
        <Feedback />
        <section>Наш подход к обучению</section>
     
      </main>
    </div>
  );
}

export default App;
