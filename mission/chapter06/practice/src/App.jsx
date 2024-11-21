import { AppContainer, TodoForm, TodoList, TodoItem, TodoDisplay, TodoEdit } from './App.style';
import { TodoContext } from './context/TodoContext';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import { useContext } from 'react';

function App() {
  const { 
    state, 
    addTodo, 
    deleteTodo, 
    updateTodo, 
    handleTextChange, 
    handleEditTextChange, 
    startEditing, 
    handleSubmit 
  } = useContext(TodoContext);

  return (
    <AppContainer>
      <TodoForm onSubmit={handleSubmit}>
        <MyInput value={state.text} onChange={handleTextChange} placeholder="할 일을 입력하세요" />
        <MyButton onClick={addTodo} type="submit">할 일 추가</MyButton>
      </TodoForm>
      <TodoList>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id}>
            {state.editingId !== todo.id ? (
              <TodoDisplay>
                <p>{todo.id}</p>
                <p>{todo.task}</p>
                <MyButton onClick={() => deleteTodo(todo.id)}>삭제하기</MyButton>
                <MyButton onClick={() => startEditing(todo.id)}>수정진행</MyButton>
              </TodoDisplay>
            ) : (
              <TodoEdit>
                <p>{todo.id}</p>
                <MyInput value={state.editText} onChange={handleEditTextChange} />
                <MyButton onClick={() => updateTodo(todo.id, state.editText)}>수정완료</MyButton>
              </TodoEdit>
            )}
          </TodoItem>
        ))}
      </TodoList>
    </AppContainer>
  );
}

export default App;
