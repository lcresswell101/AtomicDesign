import React from "react";

function List(props: {children: React.ReactNode}) {
    return (
        <div className="list">
            { props.children }
        </div>
    )
}

export default List;