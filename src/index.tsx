
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import QuerySolveComponent from './app';
import { QueryClient, QueryClientProvider } from "react-query";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <QuerySolveComponent />
    </BrowserRouter>
  </QueryClientProvider>
);

