import './Todo.css'

function Todo({title, onTodoDelte}) {
    
  return (
    <div className='todo'>
      <h2>{title}</h2>
      <button onClick={onTodoDelte}>Delete</button>
    </div>
  );
}

export default Todo;
