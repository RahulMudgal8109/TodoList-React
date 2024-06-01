import React,{useState,useEffect} from 'react'



const TodoList = () => {
    const [inputText,setInputText]=useState("");
    const [inputNum,setInputNum]=useState("");
    const [tasks,setTasks]=useState([]);
    const [editIndex,setEditIndex]=useState(null);
    const [editInput, setEditInput] = useState("");
    function handleInputText(e)
    {
        setInputText(e.target.value);
    }
    function handleInputNum(e)
    {
        setInputNum(e.target.value);
    }
    function handleAddTask(){
        if(inputText.trim() !== "" && inputNum>0)
            {
                const newTask={subject:inputText,time:parseInt(inputNum)};
        setTasks([...tasks,newTask]);
        console.log(tasks);


            }
            setInputText("");
            setInputNum("");
    }
    function handleEdit(index)
    {
        setEditIndex(index);
        setEditInput(tasks[index].subject);
    }
    function handleEditInputChange(e)
    {
        setEditInput(e.target.value)

    }
    function handleEditSave(index)
    {
        const updatedTask=[...tasks];
        updatedTask[index].subject=editInput
        setTasks(updatedTask);
        setEditIndex(null);
        
    }
    function handleIncrement(index)
    {
        const updatedTask=[...tasks];
        updatedTask[index].time += 1;
        setTasks(updatedTask);
    }
    function handleDecrement(index)
    {
        const updatedTask=[...tasks];
        updatedTask[index].time -= 1;
        setTasks(updatedTask);

    }
    function handleDelete(index)
    {
        const allTasks=[...tasks];
        // console.log()
        // console.log(allTasks);
        // console.log(index);
        const filteredTask=allTasks.filter((task,idx)=>{
            //console.log(idx);
            if(idx===index)
                {
                    // console.log("idx");
                    // console.log(idx);
                }
            return idx!==index;
        })
        //console.log(allTasks);
        setTasks(filteredTask);
    }
  return (
    <>
<div className="text-3xl md:text-4xl font-bold dark:text-white text-center">
          Geekster Education Planner
        </div>
        <div className="font-extralight  md:text-xl dark:text-neutral-200 py-4">
          <div className=" flex justify-center items-center gap-4">
            <input
              type="text"
              value={inputText}
              onChange={handleInputText}
              placeholder="Subject"
              className="border border-gray-200 text-xl p-2 text-black w-96"
            />
            <input
              type="number"
              placeholder="Hour"
              value={inputNum}
              onChange={handleInputNum} min="1" max="12"
              className="border border-gray-200 text-xl p-2 text-black w-20"
            />
            <button
              className="bg-black dark:bg-white w-fit text-white dark:text-black px-4 py-2 "
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="text-black font-bold border flex justify-between py-2 my-3 px-3"
              >
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editInput}
                      onChange={handleEditInputChange}
                      className="border border-gray-200 text-xl p-2 text-black"
                    />
                    <button onClick={() => handleEditSave(index)}>Save</button>
                  </>
                ) : (
                  <>
                    <h1>
                      {task.subject} - {task.time} Hour
                    </h1>
                    <div className="flex gap-4">
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      {/* Other buttons */}
                    </div>
                  </>
                )}
                <div className="flex gap-4">
                  <button
                    className="text-2xl " onClick={()=>{
                        handleIncrement(index);
                    }}
                    
                  >
                    +
                  </button>
                  <button className="text-3xl" onClick={()=>{
                    handleDecrement(index);
                  }}>
                    -
                  </button>
                  <button onClick={()=>{
                    handleDelete(index);
                  }}>❌</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default TodoList;