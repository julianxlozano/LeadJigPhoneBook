import React, { useState } from 'react';
import EditCustomInput from './EditCustomInput';

const EditContactForm = (props) => {

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [customFields,setCustomFields] = useState([])

 

    const handleSumbit = (e) =>{
        e.preventDefault()
        const newContact = {
            id: props.contact.id,
            firstName: firstName || props.contact.firstName,
            lastName: lastName || props.contact.lastName,
            phoneNumber: phoneNumber || props.contact.phoneNumber
        }


        let contactIndex = props.allContacts.findIndex(contact=> contact.id === props.contact.id)
        const newContactsArray = [...props.allContacts]
        newContactsArray[contactIndex] = newContact
        props.setContacts(newContactsArray)
        props.setEditing(false)
    }

    const getCustomFields = () => {
      //  debugger
        const customFieldsToEdit = []
        for (const field in props.contact){
            if (field === 'id' || field === 'firstName' || field === 'lastName' || field === 'phoneNumber') continue;
            customFieldsToEdit.push({[field]: props.contact[field]})
        }

       // debugger
        return (
            customFieldsToEdit.map(customField=><EditCustomInput/>)
        )
    } 

        return (
            <form className="edit-form" onSubmit={handleSumbit}> 
                <div className="form-group">
                    <label for="FormControlInput1">First Name</label>
                    <input onChange={e=>setFirstName(e.target.value)} type="text" className="form-control" id="FormControlInput2" defaultValue={props.contact.firstName}></input>
                    <label for="FormControlInput1">Last Name</label>
                    <input onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="FormControlInput3" defaultValue={props.contact.lastName}></input>
                    <label for="FormControlInput1">Phone Number</label>
                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="FormControlInput4" defaultValue={props.contact.phoneNumber}></input>
                    {Object.keys(props.contact).length > 3 ? getCustomFields() : null}
                </div>
                <div className="btn-group">
                <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
                </div>
        </form>
        );
 
}

export default EditContactForm;
