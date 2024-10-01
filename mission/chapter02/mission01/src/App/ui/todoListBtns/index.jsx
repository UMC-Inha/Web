import React from "react";
const TodoListBtns = (props) => {
  const todoContentRef = React.useRef();
  const { elem, handleTodoListBtn } = props;
  return (
    <div
      className="todoList__content"
      onClick={(event) => {
        handleTodoListBtn(event, elem.idx, todoContentRef.current);
      }}
    >
      <span>{elem.idx}. </span>
      <input
        ref={todoContentRef}
        type={"text"}
        defaultValue={elem.content}
        disabled={!elem.isModifing}
      />
      <input id="deleteBtn" type="button" defaultValue={"삭제하기"} />
      <input
        id="startModifyBtn"
        type={elem.isModifing ? "hidden" : "button"}
        defaultValue={"수정 진행"}
      />
      <input
        id="endModifyBtn"
        type={elem.isModifing ? "button" : "hidden"}
        defaultValue={"수정 완료"}
      />
    </div>
  );
};

export default TodoListBtns;
