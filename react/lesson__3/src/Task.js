function Task(props) {
    let { task, donetask, index,deleteTask } = props;
    return (
        <div
            className="task"
            style={{ textDecoration: task.done ? 'line-through' : 'none' }}
       
        >
            
            {task.text}
            <div>
                 <button onClick={() => donetask(index)}>Done</button>
                 <button onClick={() =>deleteTask(index)}>X</button>
                
                 
            </div>
           
        </div>
    )
}
export default Task;