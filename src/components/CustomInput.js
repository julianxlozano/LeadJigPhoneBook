import React, { useState } from 'react';

const CustomInput = (props) => {

    const [customValue,setCustomValue] = useState("");
    const [customFieldName,setCustomFieldName] = useState("")

    const createCustomField = (e) =>{
        const newField = {
            [customFieldName]: customValue
        }
    }

        return (
            <div>
            <input onChange={e=>setCustomFieldName(e.target.value)} type="text" className="form-control"  placeholder="name of custom field"></input>
            <input onChange={e=>setCustomValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
            <button onClick={createCustomField} className="btn btn-success email-btn"  >Save Custom Field</button> 
            </div>
        );
   
}

export default CustomInput;