import { useState } from 'react';
const TodoItem = ({ itemProp, handleChange }) => {
const [editing, setEditing] = useState(false);

    
const handleEditing = () => {
    setEditing(true);
  };
return (
    <li>
      <input
       type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
       <button onClick={handleEditing}>Edit</button>
       <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};
export default TodoItem;
