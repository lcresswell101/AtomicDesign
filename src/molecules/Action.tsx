import React from "react";

function Action(props: {children: React.ReactNode}) {
    return (
        <div className="flex">
            { props.children }
        </div>
    )
}

export default Action;