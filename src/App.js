import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAccount from './components/AddAccount';
import ViewAccounts from './components/ViewAccounts';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAccount/>}/>
        <Route path='/view' element={<ViewAccounts/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
