import { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    text: '',
    editingId: false,
    editText: ''
  });

  const addTodo = () => {
    if (state.text.trim().length === 0) return;
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, { id: Math.floor(Math.random() * 100) + 2, task: state.text }],
      text: ''
    }));
  };

  const deleteTodo = (id) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((item) => item.id !== id)
    }));
  };

  const updateTodo = (id, newText) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.map((item) => item.id === id ? { ...item, task: newText } : item),
      editingId: false,
      editText: ''
    }));
  };

  const handleTextChange = (e) => {
    setState((prev) => ({
      ...prev,
      text: e.target.value
    }));
  };

  const handleEditTextChange = (e) => {
    setState((prev) => ({
      ...prev,
      editText: e.target.value
    }));
  };

  const startEditing = (id) => {
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      setState((prev) => ({
        ...prev,
        editingId: id,
        editText: todo.task
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <TodoContext.Provider 
      value={{ 
        state, 
        addTodo, 
        deleteTodo, 
        updateTodo, 
        handleTextChange, 
        handleEditTextChange, 
        startEditing, 
        handleSubmit 
      }}>
      {children}
    </TodoContext.Provider>
  );
}
