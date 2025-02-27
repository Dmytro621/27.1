import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [darkTheme, setDarkTheme] = useState('light');

  useEffect(() => {
    document.body.className = darkTheme;
  }, [darkTheme]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <ErrorBoundary> {}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main todos={todos} setTodos={setTodos} addTodo={addTodo} deleteTodo={deleteTodo} newTodo={newTodo} setNewTodo={setNewTodo} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function Header() {
  return (
    <>
      <header>
        <NavLink className={'link'} to={'/'}>Головна</NavLink>
        <NavLink className={'link'} to={'/Contact'}>Контакти</NavLink>
        <NavLink className={'link'} to={'/About'}>Про мене</NavLink>
      </header>
    </>
  );
}

function Main({ todos, addTodo, deleteTodo, newTodo, setNewTodo, darkTheme ,setDarkTheme}) {
  return (
    <>
      <h2>Головна</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Добавьте новую задачу"
      />
      <button onClick={addTodo}>Добавить</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={() => { setDarkTheme(darkTheme === 'light' ? 'dark' : 'light'); }}>LALAALA</button>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Контакти</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem eligendi, iusto nihil, aut, laudantium animi rem quo ea consequuntur voluptatibus illum! Qui quaerat ut consectetur totam!</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>Про мене:</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem eligendi, iusto nihil, aut, laudantium animi rem quo ea consequuntur voluptatibus illum! Qui quaerat ut consectetur totam!</p>
    </>
  );
}

export default App;
