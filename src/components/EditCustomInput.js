import React, { useState } from 'react';

const EditCustomInput = (props) => {

    const [customValue,setCustomValue] = useState("");

    const createCustomFieldValue = (value) =>{
 
        setCustomValue(value)

        const newField = {
            id: props.newField.id,
            [Object.keys(props.newField)[0]]: customValue
        }
   
        console.log(props.newField.id)
        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        console.log(customIndex)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)
    }


        return (
            <div>
            <label for="FormControlInput1">{Object.keys(props.newField)[1]}</label>
            <input onChange={e=>createCustomFieldValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field" defaultValue={props.newField[Object.keys(props.newField)[1]]}></input>
            </div>
        );
 

}

export default EditCustomInput;