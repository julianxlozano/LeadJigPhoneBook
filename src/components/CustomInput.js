import React, { useState } from 'react';

const CustomInput = (props) => {

    const [customValue,setCustomValue] = useState("");
    const [customFieldName,setCustomFieldName] = useState("")
    const [saved,setSaved] = useState(false)

    const createCustomField = (e) =>{
        const newField = {
            [customFieldName]: customValue
        }

        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)
        setSaved(true)
    }

    if (saved === true ){
        return(
            <div>
            <label for="CustomInput1">{customFieldName}</label>
            <input  type="text" className="form-control"  id="customInput1" defaultValue={customValue}></input>
            </div>
        )
    }else{
        return (
            <div>
            <input onChange={e=>setCustomFieldName(e.target.value)} type="text" className="form-control"  placeholder="name of custom field"></input>
            <input onChange={e=>setCustomValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
            <button onClick={createCustomField} className="btn btn-success email-btn"  >Save Custom Field</button> 
            </div>
        );
    }
   
}

export default CustomInput;