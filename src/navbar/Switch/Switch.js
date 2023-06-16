import React from 'react';
import "./Switch.css";

const Switch = () => {
    return (
        <label className='switch' >
            
            <div className='switch__text'>Dark Mode</div>
            <input type="checkbox" />
            <span className='slider'/>
        </label>
    );
};

export default Switch;