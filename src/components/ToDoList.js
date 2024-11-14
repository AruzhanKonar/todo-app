import ToDoItem from "./ToDoItem";


const ToDoList = ({currentState}) => {
    return (
    <div>
        {
        currentState.map((element)=> (
        <ToDoItem
        todoHeading={element.heading}
        todoDescription={element.description}
        todoDeadline={element.deadline}
    />
    )
)
    }

    </div>
    )
};

export default ToDoList;