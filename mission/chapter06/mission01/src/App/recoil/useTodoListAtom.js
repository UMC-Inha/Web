import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
// key는 절대 겹치지 않게 설정
const todoListAtom = atom({ key: "TOTODOLIST_ATOM", default: [] });

const useTodoListAtom = () => {
  const todoList = useRecoilValue(todoListAtom);
  const setTodoList = useSetRecoilState(todoListAtom);

  const setTodoListEvent = (value) => {
    setTodoList(value);
  };

  return [todoList, setTodoListEvent];
};
export default useTodoListAtom;
