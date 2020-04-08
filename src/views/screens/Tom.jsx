import React from "react";

const Tom = () => {
    const btnClick = () => {
        alert("test alert")
    }

    return (
        <div>
            <h1>test screen baru</h1>
            <input type="button" value="test btn" onClick={btnClick}/>
            <hr />
        </div>
    )

}

export default Tom;