import Card from "../molecules/Card";
import Paragraph from "../atoms/Paragraph";
import Action from "../molecules/Action";
import Button from "../atoms/Button";

type Props = {
    task: string;
    index: number;
    classes: string;
    handleTaskRemoved: (arg0: number) => void;
}

function Task(props: Props) {
    const handleRemoveTask = () => {
        props.handleTaskRemoved(props.index)
    }

    return (
        <div className={props.classes}>
            <Card>
                <div className={"mb-6"}>
                    <Paragraph paragraph={props.task}/>
                </div>

                <Action>
                    <Button type={"button"} text={"Remove"} variant={"danger"} handleClick={handleRemoveTask}/>
                </Action>
            </Card>
        </div>
    )
}

export default Task;