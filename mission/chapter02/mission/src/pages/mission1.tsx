import { useState } from 'react'
import Button from './components/Button'
import Input from './components/input'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, task: 'Learn React'},
    {id: 2, task: 'Learn Java'},
    {id: 3, task: 'Learn Python'},
  ])

  const [text, setText] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo()
  }

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }])
      setText('')
    }
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? {...item, task: text} : item))
    )
    setEditingId(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit'>할 일 등록</Button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
            {editingId !== todo.id ? (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <Input
                  type="text"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>수정 전환</Button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default App;