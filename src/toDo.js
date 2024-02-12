import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    console.log(toDo);
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    //state가 변경되어야 하기 때문에 기본 배열을 사용하지 않고, 새 배열을 리턴해준다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  return (
    <div className="App">
      <h1>My ToDos ({toDos.length})개나 있어! 도망쳐!!!!!</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text" placeholder="Write your to do..."/>
        <button type="submit">Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) =>
        {return (<li key={index}>{item}</li>)}
        )}
      </ul>
    </div>
  );
}

export default App;
