import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";//For getting bootstrap on every component
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
