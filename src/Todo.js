

function Todo({todo,toogleTask,removeTask}) {
  return (
    <div key={todo.id} className="item-todo">
      <div className={todo.complete ? 'item-text strike' : 'item-text' } onClick={() => toogleTask(todo.id)}>
        {todo.task}
        </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        x
      </div>
    </div>
  );
}

export default Todo;