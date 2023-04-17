import { useState, useEffect, ReactEventHandler } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FiDelete } from 'react-icons/fi'

interface TaskProps {
    id: string,
    value: string,
};

const initial: TaskProps[] = [
	{id: uuidv4() ,value: '',},
];

const ToDoList = () => {
    const [tasks, setTasks] = useState(initial);

    const getInitialTask = (): TaskProps => {
        return {
            id: uuidv4(),
            value: '',
        }
    }

    function changeValue (id: string, e: React.ChangeEvent<HTMLInputElement> ) {
		let copy: TaskProps[] = Object.assign([], tasks);
		copy.map(task => task.id === id ? task.value = e.target.value : task);
		setTasks(copy)
	}

    const deleteTask = (id: string) => {
        if (tasks.length > 1) {
          let newTasks = tasks.filter( task => {
            return  task.id !== id
          })
          setTasks(newTasks);
          localStorage.setItem('tasks', JSON.stringify(newTasks))
        }
      }
    
      const addTask = () => {
        let newTasks = [...tasks, getInitialTask()]
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      }
    
      useEffect(() => {
        let localTasks = localStorage.getItem('tasks');
        setTasks(localTasks ? JSON.parse(localTasks) : [])
      }, [])
      //////
      
    return <>
        <ul className="py-10">
            {tasks.map( task => {
                const input = <input 
                type="text"
                title={task.value}
                placeholder={tasks.length > 1 ? 'To-do' : 'Press "Enter" for new task'}
                autoFocus={true}
                value={task.value}
                onChange={e => changeValue(task.id, e)}
                onKeyDown={e => (e.key === 'Enter' && addTask())||((e.key === 'Backspace') && (task.value === '') && deleteTask(task.id))}
                className='outline-0 bg-inherit border-none placeholder:opacity-40 max-w-screen-lg w-2/3 '
                />

                return <li key={task.id} className="flex justify-center items-center gap-2">
                    <input title="check" type="checkbox"/>
                    {input}
                    <span>{<FiDelete title="delete" size={20} className={tasks.length > 1 ? 'hover:cursor-pointer text-red-900' : 'invisible'} onClick={() => deleteTask(task.id)}/>}</span>
                </li>
            })}
        </ul>
    </>
}

export default ToDoList;