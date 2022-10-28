import React from "react";


const LogButton = (WrappedComponent) => {
    const clickHandler = (e) => {
      
    }
    return (props) => {
        return (
            <div>
                <button onClick={clickHandler}>
                    Log Yazi
                </button>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default LogButton