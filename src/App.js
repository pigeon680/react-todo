import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoList/> 
      </div>
    </div>
  );
}

export default App;
