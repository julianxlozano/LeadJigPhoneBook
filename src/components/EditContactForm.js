import React, { useState } from 'react';

const EditContactForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")

    const handleSumbit = (e) =>{
        e.preventDefault()
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        }
        props.setContacts([...props.allContacts,newContact])
    }

        return (
            <form className="booking-form" onSubmit={handleSumbit}> 
                <div className="form-group">
                    <label for="exampleFormControlInput1">First Name</label>
                    <input onChange={e=>setFirstName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2" defaultValue={props.contact.firstName}></input>
                    <label for="exampleFormControlInput1">Last Name</label>
                    <input onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput3" defaultValue={props.contact.lastName}></input>
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="exampleFormControlInput4" defaultValue={props.contact.phoneNumber}></input>
                </div>
                <div className="btn-group">
                <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
                </div>
        </form>
        );
 
}

export default EditContactForm;
