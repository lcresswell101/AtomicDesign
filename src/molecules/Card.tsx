import React from "react";

function Card(props: {children: React.ReactNode}) {
    return (
        <div className="p-6 bg-gray-50 rounded shadow">
            { props.children }
        </div>
    )
}

export default Card;