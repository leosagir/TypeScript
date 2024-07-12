import React from 'react';
import './App.css'
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/loginForm';
import Counter from '../components/Counter/Counter';
import Feedback from '../components/Feedback/Feedback';

import Lesson04 from '../lessons/Lesson04/Lesson04';
import ProductList from '../components/ProductList/ProductList';
import MyInput from '../components/MyInput/MyInput';



const App: React.FC = () => {
  return (
    <div className="App">
      
      <Header />
      
      <Lesson04 />
      <ProductList />
      <MyInput id='1' key={1} label='pass' name='password' placeholder='enter your paassword' type='password'/>
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
