// import { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    // const i = useRef(initialValue)
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      ></input>
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;
