import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const items = useSelector(state => state.toDoItems);
  const filter = useSelector(state => state.filter);

  const filteredItems = () => {
    const filtered = [];
    for (const uuid in items) {
      const item = items[uuid];
      if (
        filter === 'all' ||
        (filter === 'done' && item.done === true) ||
        (filter === 'undone' && item.done === false)
      ) {
        filtered.push(item);
      }
    }
    return filtered;
  };

  return (
    <div className="todo-list">
      <table className="todo-items table table-borderless">
        <tbody>
          {filteredItems().map(item => (
            <TodoItem key={`todo-item-${item.uuid}`} todo={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
