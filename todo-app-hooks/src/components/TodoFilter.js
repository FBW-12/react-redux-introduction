import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filters, setFilter } from '../actions';

export default function TodoFilter() {
  const activeFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="todo-filters text-right">
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Set a filter to show items"
      >
        {Object.keys(filters).map(filterKey => {
          const filter = filters[filterKey];
          return (
            <button
              type="button"
              className={`btn btn-light ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => dispatch(setFilter(filter))}
              key={filterKey}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
