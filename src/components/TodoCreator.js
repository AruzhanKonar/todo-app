import { useState } from "react";
import styles from "../assets/css/TodoCreator.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TodoCreator = ({handleTodoCreate}) => {
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    
    const formatDate = (date) => {
        const year = date.getFullYear();
        let month = ""+(date.getMonth()+1);
        let day = ""+ date.getDate();

        if(month.length<2) {
            month="0"+month;
        }
        if(day.length<2) {
            day="0"+day;
        }
        return[day,month,year].join(".");
    }
    const handleCreate = (e) => {
        e.preventDefault();
        let deadline = formatDate(startDate) + "-" + formatDate(endDate);
        handleTodoCreate(title,description,deadline)
    }
    
    return (
        <form onSubmit={handleCreate} className={styles.form}>
            <input placeholder="Заголовок задач" className={styles.title} maxLength={15}
            value={title}
            onChange={(e) => setTitle (e.target.value)} />
            <textarea placeholder="Описание задач" className={styles.description} maxLength={30}
            value={description}
            onChange={(e) => setDescription (e.target.value)} />
            <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
    />
    <button className="button" type="submit">Создать</button>
        </form>
        
    )
};

export default TodoCreator;