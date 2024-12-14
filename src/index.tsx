
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import QuerySolveComponent from './app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <QuerySolveComponent/>
  </BrowserRouter>
);

