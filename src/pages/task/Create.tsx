import List from "../../templates/List";
import CreateTask from "../../organisms/CreateTask";
import Task from "../../organisms/Task";
import {useDispatch, useSelector} from "react-redux";
import { add, remove } from "../../store/tasks";

interface RootState {
    tasks: {
        tasks: string[]
    },
}

function Create() {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleAddTaskToTasksArray = (task: string ) => dispatch(add(task));

    const handleRemoveTaskFromTasksArray = (index: number) => dispatch(remove(index))

    return (
        <div className={"w-1/2 mx-auto mt-6"}>
            <CreateTask classes={"mb-6"} handleTaskAdded={handleAddTaskToTasksArray}/>

            <List>
                {
                    tasks.length > 0 && tasks.map((task, index) =>
                        <Task task={task} key={index} index={index} classes={"mb-3"} handleTaskRemoved={handleRemoveTaskFromTasksArray} />
                    )
                }
            </List>
        </div>
    )
}

export default Create;