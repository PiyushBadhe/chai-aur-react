import React from 'react';

function Button({ btnText = "Click here", link, operation }) {
    return (
        <>
            {!link ? (
                <button onClick={operation}>{btnText}</button>
            ) : (
                <a href={link}>
                    <button onClick={operation}>{btnText}</button>
                </a>
            )}
        </>
    );
}

export default Button;
