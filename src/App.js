import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import ListTasks from './Components/ListTasks/ListTasks.js';

function App() {
  return (
    <div className="App">
      <h1>TODO list Redux</h1>
      <AddTask/>
      <ListTasks/>
    </div>
  );
}

export default App;
