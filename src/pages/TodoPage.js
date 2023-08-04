import React, {useState} from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const TodoPage = () =>{
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {id: todos.length + 1, text, status: "to do"}]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !==id));
    };

    const updateTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, status: "done" } : todo
          )
        );
      };

    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateToDo={updateTodo}/>
        </div>
    );
};

export default TodoPage;