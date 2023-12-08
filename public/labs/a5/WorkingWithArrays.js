import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
      id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });

    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({});

    const [todos, setTodos] = useState([]);

    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };
  
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const removeTodo = async (todo) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);


  
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />
   
        <button onClick={createTodo}
                className="btn btn-primary mb-2 w-100">
          Create Todo
        </button>

        <input
          value={todo.title}
          onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
          className="form-control mb-2"
          type="text"
        />
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id}
                className="list-group-item">
              <button
                onClick={() => removeTodo(todo)}
                className="btn btn-danger float-end" >
                Remove
              </button>
              {todo.title}
            </li>
          ))}
        </ul>

        <h3>Updating an Item in an Array</h3>
        <a
          href={`${API}/${todo.id}/title/${todo.title}`}
          className="btn btn-primary me-2" >
          Update Title to {todo.title}
        </a>


        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
           className="btn btn-primary me-2">
          Delete Todo with ID = {todo.id}
        </a>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
           className="btn btn-primary me-2" >
          Get Completed Todos
        </a>

        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
           className="btn btn-primary me-2">
          Create Todo
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input
          className="form-control"
          value={id}
          onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
           className="btn btn-primary me-2">
          Get Todo by ID
        </a>

      </div>
    );
  }
  export default WorkingWithArrays;