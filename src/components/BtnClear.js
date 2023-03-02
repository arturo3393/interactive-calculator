import React from 'react';
import '../stylesheet/BtnClear.css'

const BtnClear = (props) => {
    return <div className='btn-clear' onClick={props.handleClear}>
        {props.children}
    </div>
};

export default BtnClear;