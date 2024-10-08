import './App.css';
import { useState } from 'react';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';

function App() {

  const [state, setState] = useState({
    todos: [],
    text: '',
    editingId: false,
    editText: ''
  });

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if (state.text.trim().length === 0) return;
    setState((prev) => ({
      ...prev,
      todos: [
        ...prev.todos,
        {
          id: Math.floor(Math.random() * 100) + 2,
          task: prev.text
        }
      ],
      text: ''
    }));
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.filter((item) => item.id !== id)
    }));
  }

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.map((item) => item.id === id ? { ...item, task: text } : item),
      editingId: false
    }));
  }

  // 입력 값 변경 처리
  const handleTextChange = (e) => {
    setState((prev) => ({
      ...prev,
      text: e.target.value
    }));
  };

  // 수정 입력 값 변경 처리
  const handleEditTextChange = (e) => {
    setState((prev) => ({
      ...prev,
      editText: e.target.value
    }));
  };

  // 수정 상태 설정
  const startEditing = (id) => {
    setState((prev) => ({
      ...prev,
      editingId: id,
      editText: prev.todos.find((todo) => todo.id === id).task
    }));
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <MyInput
          value={state.text}
          onChange={handleTextChange}
          placeholder="할 일을 입력하세요"
        />
        <MyButton onClick={addTodo} type="submit">
          할 일 추가
        </MyButton>
      </form>
      <div className="todo-list">
        {state.todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {state.editingId !== todo.id ? (
              <div className='todo-display'>
                <p>{todo.id}</p>
                <p>{todo.task}</p>
                <MyButton onClick={() => deleteTodo(todo.id)}>삭제하기</MyButton>
                <MyButton onClick={() => startEditing(todo.id)}>수정진행</MyButton>
              </div>
            ) : (
              <div className='todo-edit'>
                <p>{todo.id}</p>
                <MyInput
                  value={state.editText}
                  onChange={handleEditTextChange}
                />
                <MyButton onClick={() => updateTodo(todo.id, state.editText)}>수정완료</MyButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
