function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({});
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
           className="btn btn-primary me-2" >
          Get Completed Todos
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