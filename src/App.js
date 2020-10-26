import './App.css';
import TodoList from './components/todo/TodoList';
import TodoState from './context/todo/todoState'

function App() {
  return (
    <TodoState>
      <TodoList />
    </TodoState>
  );
}

export default App;
