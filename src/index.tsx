import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';
import FormGender from './components/FormGender/FormGender';
import RobotForm from './components/RobotFormikForm/RobotForm';
import LoginForm from './components/LoginForm/loginForm';
import Counter from './components/Counter/Counter';
import Feedback from './components/Feedback/Feedback';
import HomePage from './components/HomePage/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
  <Route path='/' element={<StarWarsGallery/>}/>
  <Route path='/gender-form' element={<FormGender/>}/>
  <Route path='/robot-form' element={<RobotForm/>}/>
  <Route path='/login-form' element={<LoginForm/>}/>
  <Route path='/counter' element={<Counter/>}/>
  <Route path='/feedback' element={<Feedback/>}/>
  <Route path='/home-page' element={<HomePage/>}/>


    </Route>
    </Routes>
  </HashRouter>
);


