import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { GodownList, Register, HomePage, LoginPage} from './Pages'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/godown_list' element={<GodownList />} />
      <Route path='/login' element={<LoginPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
