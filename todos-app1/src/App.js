import './App.css';
import Sections from './components/Sections/Sections';
import Tasks from './components/Tasks/Tasks';
import { Routes, Route } from "react-router-dom";
import Todos from './pages/Todos';
import HighTodos from './pages/HighTodos'
import MediumTodos from './pages/MediumTodos'
import LowTodos from './pages/LowTodos'
import PersonalTodos from './pages/PersonalTodos'
import ProffessionalTodos from './pages/ProffessionalTodos'
import TodayTodos from './pages/TodayTodos';

function App() {
  
  return (
      <div>
        <div className='row main-bg'>
          <div className='col-2'>
            <Sections/>
          </div>
          <div className='col-10'>
            <Tasks/>

              <Routes>

                <Route path="/" element={<Todos/>}/>
                <Route path="/todaytasks" element={<TodayTodos/>}/>
                <Route path="/hightasks" element={<HighTodos/>}/>
                <Route path="/mediumtasks" element={<MediumTodos/>}/>
                <Route path="/lowtasks" element={<LowTodos/>}/>
                <Route path="/personaltasks" element={<PersonalTodos/>}/>
                <Route path="/proffessionaltasks" element={<ProffessionalTodos/>}/>
                
              </Routes>

          </div>
        </div>
      </div>
  );
}

export default App;
