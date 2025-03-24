import './TodoList.css';

function TodoList({ children, searchValue }) {
  return (
    <ul className="TodoList">
      {children} 
    </ul>
  );
}

export { TodoList };