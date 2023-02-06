import React from "react";

type Props = {
    type: string;
    value: string | number | readonly string[] | undefined;
    classes?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: Props) {
    return (
        <input type={props.type} value={props.value} className={`p-3 border-b-2 ${props.classes}`} onChange={props.handleChange}/>
    )
}

export default Input;