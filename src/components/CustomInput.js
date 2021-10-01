import React, { useState } from 'react';

const CustomInput = (props) => {

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


//debugger
    // if (Object.keys(props.newField).length > 1){
    //     return(
    //         <div>
    //         <label for="CustomInput1">{props.newField.keys[1]}</label>
    //         <input  type="text" className="form-control"  id="customInput1" defaultValue={props.newField[props.newField.keys[1]]}></input>
    //         </div>
    //     )
    // }else{
        return (
            <div>
            <input onChange={e=>createCustomFieldName(e.target.value)} type="text" className="form-control"  placeholder="name of custom field" ></input>
            <input onChange={e=>createCustomFieldValue(e.target.value)} type="text" className="form-control"  placeholder="value of custom field"></input>
            {/*<button onClick={createCustomField} className="btn btn-success email-btn" >Save Custom Field</button>*/}
            </div>
        );
    //}

}

export default CustomInput;