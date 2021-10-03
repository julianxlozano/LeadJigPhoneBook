import React from 'react';


const EditContactForm = (props) => {


    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

    const handleSumbit = (e) =>{
        
        e.preventDefault()
        const newContact = {}
        const allFields = e.target.children
  

        for (let i = 1; i < allFields.length; i++){
            if (allFields[i].id === 'dynamic-input'){
                newContact[allFields[i].name] = allFields[i].value
            }
        }

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

            let newString = deet.replace(/([A-Z])/g, ' $1');
            let formattedDeet = newString.charAt(0).toUpperCase() + newString.slice(1);

            deets.push(
            <label>{formattedDeet}</label>,
            <input key={keyNum} className="edit-fields form-control" name={deet} id="dynamic-input"defaultValue={props.contact[deet]}></input>
            )
            keyNum += 1
        }
        return deets
    } 

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
