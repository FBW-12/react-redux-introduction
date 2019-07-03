import React from 'react';
import './scss/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="container">
      <Header tagline="Here are all the next tasks.">
        <Link to="/help" className="faq">
          FAQ
        </Link>
      </Header>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}
