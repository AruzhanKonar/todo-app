import styles from "../assets/css/TodoItem.module.css";

const ToDoItem = ({todoHeading, todoDescription, todoDeadline}) => {
    return (
    <div  className={styles.todoItem}>
        <h1>{todoHeading}</h1>
        <p>{todoDescription}</p>
        <p>Дедлайн: {todoDeadline || "Нету"}</p>
    </div>
    );
};

export default ToDoItem;