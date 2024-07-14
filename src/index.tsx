import ReactDOM from 'react-dom/client';

import './index.css';
// import Lesson06 from './lessons/lesson06/Lesson06';
// import App from './app/App';
// import Lesson07 from './lessons/lesson07/Lesson07';
import Layout from './components/Layout/Layout';
import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Layout/>
 
    {/* <App />
    <Lesson06/>
    <Lesson07 /> */}
  </>
);


