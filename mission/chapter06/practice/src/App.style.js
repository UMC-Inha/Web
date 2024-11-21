// App.style.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const TodoForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const TodoDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TodoEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
