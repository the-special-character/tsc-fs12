import React from 'react'
const bgcolor = "red";
const color = "blue";
const Textinput = ({id , label, placeholder}) => {
    return (
        <>
            <label htmlFor={id}
                style={
                    {
                        backgroundColor: "red",
                        color: "blue",
                    }
                }>{label}</label>
            <input type="text" id={id} className="border" placeholder={placeholder} />
        </>
    );
}

export default Textinput 