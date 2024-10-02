import React from "react";

const useTodoList = () => {
  const [todoList, setTodoList] = React.useState([]);

  // todo list 갱신
  const renderTodoList = (event, todoContent) => {
    const inputValue = todoContent.value;
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        idx: Math.floor(Math.random() * 100) + 2,
        content: inputValue,
        isModifing: false,
      },
    ]);
    todoContent.value = "";
  };
  // todo list 버튼 이벤트 관리
  const handleTodoListBtn = (event, idx, contentRef) => {
    const tempList = [...todoList];
    const id = event.target.id;
    switch (id) {
      // 삭제 버튼
      case "deleteBtn": 
        setTodoList(todoList.filter((elem) => elem.idx !== idx));
        return;
      // 수정 진행 버튼
      case "startModifyBtn":
        tempList.forEach((elem) => {
          if (elem.idx === idx) elem.isModifing = true;
        });
        setTodoList(tempList);
        return;
      // 수정 완료 버튼
      case "endModifyBtn":
        if (!contentRef) return null;
        tempList.forEach((elem) => {
          if (elem.idx === idx) {
            elem.isModifing = false;
            elem.content = contentRef.value;
          }
        });
        setTodoList(tempList);
        return;
      default:
        return;
    }
  };
  return [todoList, renderTodoList, handleTodoListBtn];
};

export default useTodoList;
