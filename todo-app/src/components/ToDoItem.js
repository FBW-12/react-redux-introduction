import React from 'react';
import { connect } from 'react-redux';
import { updateToDoText, toggleToDo, removeToDo } from '../actions/index';
import PropTypes from "prop-types";

class ToDoItem extends React.Component {
  handleInputKeyUp(e) {
    // Remove focus, when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              defaultValue={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={e => {
                this.props.toggleToDo(todo.uuid);
              }}
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
            defaultValue={todo.text}
            onChange={e => {
              this.props.updateToDoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleInputKeyUp(e);
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={() => this.props.removeToDo(todo.uuid)}
            onKeyUp={e => e.keyCode === 13 && this.props.removeToDo(todo.uuid)}
            role="button"
            tabIndex="0"
          />
        </td>
      </tr>
    );
  }
}

export default connect(
  state => ({}),
  {
    updateToDoText,
    toggleToDo,
    removeToDo,
  }
)(ToDoItem);

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  toggleToDo: PropTypes.func.isRequired,
  updateToDoText: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
};
