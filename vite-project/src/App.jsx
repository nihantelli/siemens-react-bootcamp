import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='content'>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;