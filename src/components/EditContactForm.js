import React, { useState,useEffect } from 'react';
import EditCustomInput from './EditCustomInput';

const EditContactForm = (props) => {

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [customFields,setCustomFields] = useState([])

    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

    const handleSumbit = (e) =>{
        
        e.preventDefault()
        //console.log(document.getElementsByClassName('edit-fields'))

        const newContact = {}
        const allFields = e.target.children
  

        for (let i = 1; i < allFields.length; i++){
            if (allFields[i].id === 'dynamic-input'){
                newContact[allFields[i].name] = allFields[i].value
            }
        }



        // const newContact = {
        //     id: props.contact.id,
        //     firstName: firstName || props.contact.firstName,
        //     lastName: lastName || props.contact.lastName,
        //     phoneNumber: phoneNumber || props.contact.phoneNumber
        // }


        let contactIndex = props.allContacts.findIndex(contact=> contact.id === props.contact.id)
        const newContactsArray = [...props.allContacts]
        newContactsArray[contactIndex] = newContact
        props.setContacts(newContactsArray)
        props.setEditing(false)
    }

    const getDetails = () => {
        let deets = []
        let keyNum = 0
        for (const deet in props.contact){
            if (deet === 'id') continue;
            deets.push(
            <label>{deet}</label>,
            <input key={keyNum} className="edit-fields form-control" name={deet} id="dynamic-input"defaultValue={props.contact[deet]}></input>
            )
            keyNum += 1
        }
        return deets
    } 

    //  useEffect(() => {
       
    //     for (const field in props.contact){
    //         if (field === 'id' || field === 'firstName' || field === 'lastName' || field === 'phoneNumber') continue;
    //         setCustomFields([...customFields,{id: uuid(),[field]: props.contact[field]}])
    //     }
    //     // return (
    //     //     customFields.map(customField=><EditCustomInput key={customField.id} newField={customField} customFields={customFields} setCustomFields={setCustomFields}/>)
    //     // )
    // },[])


    //     return (
    //         <form className="edit-form" onSubmit={handleSumbit}> 
    //             <div className="form-group">
    //                 <label for="FormControlInput1">First Name</label>
    //                 <input onChange={e=>setFirstName(e.target.value)} type="text" className="form-control" id="FormControlInput2" defaultValue={props.contact.firstName}></input>
    //                 <label for="FormControlInput1">Last Name</label>
    //                 <input onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="FormControlInput3" defaultValue={props.contact.lastName}></input>
    //                 <label for="FormControlInput1">Phone Number</label>
    //                 <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="FormControlInput4" defaultValue={props.contact.phoneNumber}></input>
    //                 {/*Object.keys(props.contact).length > 3 ? getCustomFields() : null*/}
    //                 {Object.keys(props.contact).length > 3 ? customFields.map(customField=><EditCustomInput key={customField.id} newField={customField} customFields={customFields} setCustomFields={setCustomFields} />) : null}
    //             </div>
    //             <div className="btn-group">
    //             <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
    //             </div>
    //     </form>
    //     );


        return(
            <form className="edit-form" onSubmit={handleSumbit}>
                {getDetails()}
                <div className="btn-group">
                <input type="submit" className="btn btn-success email-btn" id="FormControlInput5" ></input>
                </div>
            </form>            

        )
 
}

export default EditContactForm;
