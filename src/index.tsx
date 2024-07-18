import ReactDOM from 'react-dom/client';

import './index.css';
// import Lesson06 from './lessons/lesson06/Lesson06';
// import App from './app/App';
// import Lesson07 from './lessons/lesson07/Lesson07';
import Layout from './components/Layout/Layout';
import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';
import Lesson09 from './lessons/lesson09/Lesson09';
import Lesson10 from './lessons/lesson10/Lesson10';
import CatFact from './lessons/lesson10/Lesson10';
import Lesson11 from './lessons/lesson11/Lesson11';
import FormGender from './components/FormGender/FormGender';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  {/* <Layout/> */}
 {/* <CatFact/> */}
    {/* <App />
    <Lesson06/>
    <Lesson07 /> */}
    {/* <Lesson11/> */}
    <FormGender/>
  </>
);


