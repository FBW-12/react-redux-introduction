import React from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../actions';

export default function TodoForm() {
  const textInput = React.createRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const text = textInput.current.value.trim();
    dispatch(addToDo(text));
    e.currentTarget.reset();
  };

  return (
    <form className="input-group my-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Add a new to-do item"
        ref={textInput}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">
          <i className="fas fa-plus" aria-hidden="true" />
          &nbsp;Add item
        </button>
      </div>
    </form>
  );
}
