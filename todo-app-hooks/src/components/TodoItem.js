import React from 'react';
import { useDispatch } from 'react-redux';
import { updateToDoText, toggleToDo, removeToDo } from '../actions';
import PropTypes from 'prop-types';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  return (
    <tr className="todo-item" data-id={todo.uuid}>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            value={todo.uuid}
            id={`todo-done-${todo.uuid}`}
            type="checkbox"
            checked={todo.done}
            onChange={() => dispatch(toggleToDo(todo.uuid))}
          />
          <label
            className="custom-control-label"
            htmlFor={`todo-done-${todo.uuid}`}
          >
            &nbsp;
          </label>
        </div>
      </td>
      <td className="col-1">
        <input
          type="text"
          className="form-control"
          value={todo.text}
          onChange={e => dispatch(updateToDoText(todo.uuid, e.target.value))}
          onKeyUp={handleKeyUp}
        />
      </td>
      <td className="col-action">
        <i
          className="icon-remove far fa-trash-alt"
          onClick={() => dispatch(removeToDo(todo.uuid))}
          onKeyUp={e => e.keyCode === 13 && dispatch(removeToDo(todo.uuid))}
          role="button"
          tabIndex="0"
        />
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};
