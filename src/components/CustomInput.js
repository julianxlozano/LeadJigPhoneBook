import React, { useState } from 'react';

const CustomInput = (props) => {

    const [custom,setCustom] = useState();

        return (
            <input onChange={e=>setCustom(e.target.value)} type="text" className="form-control"  placeholder="whatever you desire"></input>
        );
   
}

export default CustomInput;