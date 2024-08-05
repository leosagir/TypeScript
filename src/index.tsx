import ReactDOM from 'react-dom/client';

import './index.css';

import {HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';
import FormGender from './components/FormGender/FormGender';
import RobotForm from './components/RobotFormikForm/RobotForm';
import LoginForm from './components/LoginForm/loginForm';
import Counter from './components/Counter/Counter';
import Feedback from './components/Feedback/Feedback';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import ProductPage from './components/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/star-wars-gallery' element={<StarWarsGallery />} />
        <Route path='/gender-form' element={<FormGender />} />
        <Route path='/robot-form' element={<RobotForm />} />
        <Route path='/login-form' element={<LoginForm />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/newComponent' element={<h3>New component</h3>} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductPage />} />


        <Route path='*' element={<h1>Error 404</h1>} />
      </Route>
    </Routes>
  </HashRouter>
  </Provider>
);


