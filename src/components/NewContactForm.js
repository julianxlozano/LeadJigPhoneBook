import React, { useState } from 'react';

const NewContactForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")

    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

    const handleSumbit = (e) =>{
        e.preventDefault()
        const newContact = {
            id: uuid(),
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        }
        props.setContacts([...props.allContacts,newContact])
       setFirstName("")
       setLastName("")
       setPhoneNumber("")
        e.target.reset()
    }

        return (
            <form className="booking-form" onSubmit={handleSumbit}> 
                <div className="form-group">
                    <label for="exampleFormControlInput1">First Name</label>
                    <input onChange={e=>setFirstName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2" placeholder="John"></input>
                    <label for="exampleFormControlInput1">Last Name</label>
                    <input onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput3" placeholder="Doe"></input>
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="exampleFormControlInput4" placeholder="(xxx)xxx-xxxx"></input>
                </div>
                <div className="btn-group">
                <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
                </div>
        </form>
        );
 
}

export default NewContactForm;
