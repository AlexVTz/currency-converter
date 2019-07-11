import React from "react";

const ApiError = (props) => {
    return (
        props.error ?
            <div className="errorBar">
                <div>
                    Currency API is not working
                </div>
            </div> : null
    )
}

export default ApiError;