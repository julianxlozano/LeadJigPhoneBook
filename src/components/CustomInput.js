import React, { useState, useEffect } from 'react';

const CustomInput = (props) => {

    const [customValue,setCustomValue] = useState("");
    const [customFieldName,setCustomFieldName] = useState("")

    useEffect(()=>{
        const newField = {
            id: props.newField.id,
            [customFieldName]: customValue
        }
   
        console.log(props.newField.id)
        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        console.log(customIndex)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)

    },[customValue])

    useEffect(()=>{
        const newField = {
            id: props.newField.id,
            [customFieldName]: customValue
        }

        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)

    },[customFieldName])

        return (
            <div>
            <label >Custom</label>
            <input onChange={e=>setCustomFieldName(e.target.value)} type="text" className="form-control"  placeholder="name of custom field" ></input>
            <input onChange={e=>setCustomValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
            </div>
        );
 

}

export default CustomInput;