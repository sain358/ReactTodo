import React from 'react';

export default function Spinner(props = {show: false}) {
    var className;
    if (props.show) {
        className = "d-block"
    } else {
        className = "d-none"
    }

    return (
        <div className={`overlay d-flex justify-content-center align-items-center ${className}`}>
            <div className="spinner-border text-light" role="status">
                <span className="sr-only"/>
            </div>
        </div>
    )

}