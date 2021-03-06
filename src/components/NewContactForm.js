import React, { useEffect, useState } from 'react';
import CustomInput from './CustomInput';

const NewContactForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [customFields,setCustomFields] = useState([])
   

console.log(customFields)

    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

    

    const handleSumbit = (e) =>{
        e.preventDefault()

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
       
       const newContact = {
             id: uuid(),
             firstName: firstName,
             lastName: lastName,
             phoneNumber: phoneNumber
         }


       customFields.forEach(f=>Object.assign(newContact,f))

       newContact['editHistory'] = [{id:uuid(),timeOfEdit:dateTime,content:newContact}]
       props.setContacts([...props.allContacts,newContact])
       setFirstName("")
       setLastName("")
       setPhoneNumber("")
       e.target.reset()
       setCustomFields([])
    }

    const handleAddCustom = (e) =>{
        e.preventDefault()
        setCustomFields([...customFields,{id:uuid()}])
        
    }

        return (
            <form className="new-contact-form" onSubmit={handleSumbit}> 
                <div className="form-inputs form-group overflow-auto">
                    <label for="FormControlInput1">First Name</label>
                    <input onChange={e=>setFirstName(e.target.value)} type="text" className="form-control" id="FormControlInput2" placeholder="John"></input>
                    <label for="FormControlInput1">Last Name</label>
                    <input onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="FormControlInput3" placeholder="Doe"></input>
                    <label for="FormControlInput1">Phone Number</label>
                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="FormControlInput4" placeholder="(xxx)xxx-xxxx"></input>
                    {customFields.length > 0 ? customFields.map(field=><CustomInput key={field.id} newField={field} setCustomFields={setCustomFields} customFields={customFields}/>) : null}
                </div>
                <div className="btn-group">
                <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
                <button onClick={handleAddCustom} className="btn btn-success email-btn" id="FormControlInput5" >Add Custom</button> 
                </div>
        </form>
        );
 
}

export default NewContactForm;
