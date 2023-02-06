import React from "react";

type Props = {
    type: "button" | "submit";
    text: string;
    variant: "success" | "danger";
    classes?: string,
    handleClick?: () => void;
}

function Button(props: Props) {
    const handleVariant = () => {
        switch (props.variant) {
            case "success":
                return "bg-green-500";
            case "danger":
                return "bg-red-500";
        }
    }

    return (
        <button type={props.type} className={`p-3 text-white rounded shadow ${props.classes} ${handleVariant()}`} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default Button;