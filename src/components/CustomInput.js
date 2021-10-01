import React, { useState } from 'react';

const CustomInput = (props) => {

    const [customValue,setCustomValue] = useState("");
    const [customFieldName,setCustomFieldName] = useState("Custom Field")

    const createCustomFieldValue = (value) =>{
 
        setCustomValue(value)
        console.log(value)
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
    }

    const createCustomFieldName = (name) =>{
        setCustomFieldName(name)
        console.log(name)
        const newField = {
            id: props.newField.id,
            [customFieldName]: customValue
        }

        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)
    }

  


        return (
            <div>
            <label >Custom</label>
            <input onChange={e=>createCustomFieldName(e.target.value)} type="text" className="form-control"  placeholder="name of custom field" ></input>
            <input onChange={e=>createCustomFieldValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
            </div>
        );
 

}

export default CustomInput;