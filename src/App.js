import ToDoList from "./components/ToDoList";
import TabContainer from "./components/TabContainer";
import { useEffect, useState } from "react";
import TodoCreator from "./components/TodoCreator"

function App() {
  const [state, setState] = useState([
    {
      id: 0,
      heading:"Проснуться",
      description:"Cходить в душ",
      deadline: null,
      done: false,
    },
    {
      id: 1,
      heading:"Сходить в кино",
      description:"Тарантино",
      deadline: null,
      done: true,
    }
  ]);

    const [filterList] = useState ([
      {
        name: "all",
        label: "Все задачи",
      },
      {
        name: "active",
        label: "Активные задачи",
      },
      {
        name: "done",
        label: "Завершенные задачи",
      }
    ]
    );

    let[generatedId, setGeneratedId] = useState(state.length);

    const [currentState, setCurrentState] = useState(state)

    const [activeFilter, setActiveFilter] = useState(filterList[0].name);

    const onFilter = (filterName) => {
      switch(filterName) {
      case "all":
        setCurrentState(state)
        setActiveFilter(filterName)
        break;
      case "active":
        setCurrentState(state.filter((item) => !item.done))
        setActiveFilter(filterName)
        break;
      case "done":
        setCurrentState(state.filter((item)=> item.done))
        setActiveFilter(filterName)
        break;
      default:
      }
    };

    const createTodoObject = (title,description,deadline) => {
      let id = generatedId;
      setGeneratedId(generatedId+1);
      return {
      id: id++,
      heading:title,
      description:description,
      deadline:deadline,
      done: false
      }
    }

    const handleTodoCreate = (title,description,deadline) => {
      let data = createTodoObject(title,description,deadline);
      setState([...state,data]);
      console.log(data);
    }

    useEffect ( () => {
      onFilter("all");
    }, [state]);

  return (
    <div>
      <div>ToDo App</div>
      <TabContainer onFilter={onFilter} activeFilter={activeFilter} filterList={filterList} />
      <ToDoList currentState={currentState} />
      <TodoCreator handleTodoCreate={handleTodoCreate} />
    </div>
  );
}

export default App;
