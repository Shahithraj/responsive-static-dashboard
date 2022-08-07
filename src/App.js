import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/body/Dashboard';

function App() {
  return (
    <div className="App">
     <div className='AppGlass'>
       <Sidebar />
       <Dashboard />
     </div>
    </div>
  );
}

export default App;
