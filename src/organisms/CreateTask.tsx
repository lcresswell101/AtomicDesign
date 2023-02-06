import Form from "../molecules/Form"
import Input from "../atoms/Input";
import React, {useState} from "react";
import Button from "../atoms/Button";

type Props = {
    classes?: string;
    handleTaskAdded: (task: string) => void;
}

function CreateTask(props: Props) {
    const [task, setTask] = useState("");

    const handleSubmit = () => {
        if (task) {
            props.handleTaskAdded(task)

            setTask("");
        }
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    return (
        <div className={`${props.classes}`}>
            <Form handleSubmit={handleSubmit}>
                <Input type={"text"} value={task} classes={"flex-1 mr-3"} handleChange={changeTask} />
                <Button type={"submit"} text={"Add Task"} variant={"success"} />
            </Form>
        </div>
    )
}

export default CreateTask;