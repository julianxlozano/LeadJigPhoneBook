import React, { useState } from 'react';

const EditCustomInput = (props) => {

  //  debugger
    const [customValue,setCustomValue] = useState("");
    const [customFieldName,setCustomFieldName] = useState("Custom Field")


    const createCustomFieldValue = (value) =>{
        setCustomValue(value)
        console.log(value)
        const newField = {
            [customFieldName]: customValue
        }

        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)
    }

    const createCustomFieldName = (name) =>{
        setCustomFieldName(name)
        console.log(name)
        const newField = {
            [customFieldName]: customValue
        }

        let customIndex = props.customFields.findIndex(f=> f.id === props.newField.id)
        const newCustomFieldsArray = [...props.customFields]
        newCustomFieldsArray[customIndex] = newField
        props.setCustomFields(newCustomFieldsArray)
    }


        return (
            <div>
            <label for="FormControlInput1">Cust</label>
            <input onChange={e=>createCustomFieldValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
  
            </div>
        );
 

}

export default EditCustomInput;