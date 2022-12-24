import './App.css';
import { Routes, Route } from "react-router-dom";
import { GodownList, Register, HomePage, LoginPage} from './Pages'

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<HomePage />} exact />
      <Route path='/Register' element={<Register />} />
      <Route path='/GodownList' element={<GodownList />} />
      <Route path='/Login' element={<LoginPage />} />
     </Routes>
    </div>
  );
}

export default App;
