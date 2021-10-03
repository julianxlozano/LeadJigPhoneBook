import React, { useState,useEffect } from 'react';
import ContactCard from './ContactCard';
import NewContactForm from './NewContactForm';
import SearchBar from './SearchBar';

const ContactsPage = () =>{
    const [allContacts,setContacts] = useState([])


    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

    useEffect(()=>{
        setContacts([...allContacts,
        { 
            id: uuid(),
            firstName: 'Julian',
            lastName: 'Lozano',
            phoneNumber: '630-917-0690',
            editHistory:[{id:uuid(),timeOfEdit:new Date,content:{}}]
        },
        { id: uuid(),
            firstName: 'Jeremy',
            lastName: 'Emanuel',
            phoneNumber: '333 33333',
            editHistory:[{id:uuid(),timeOfEdit:new Date,content:{}}]},
        { id: uuid(),
            firstName: 'Marilyn',
            lastName: 'Reles',
            phoneNumber: '999 99999999',
            editHistory:[{id:uuid(),timeOfEdit:new Date,content:{}}]},
        { id: uuid(),
            firstName: 'Frank',
            lastName: 'Javier',
            phoneNumber: '444 44444',
            editHistory:[{id:uuid(),timeOfEdit:new Date,content:{}}]},
            {id: uuid(),
                firstName: 'Clemmie',
                lastName: 'Michelle',
                phoneNumber: '555 555 55555',
                editHistory:[{id:uuid(),timeOfEdit:new Date,content:{}}]}
        ])
    },[])


    const searchBy = (e) => {
        e.preventDefault()
        const searchParam = document.getElementById('select-box').value
        const searchTerm = e.target.children[1].children[0].value
        setContacts(allContacts.filter(contact=>contact[searchParam] === searchTerm))
      //  debugger
        
    }
   


        return (
            <div className="container">
                   <SearchBar searchBy={searchBy}/>
            <div className="all-contact-cards container col d-flex justify-content-center">
             
            <div className="card-rows row row-cols-1 row-cols-md-3 g-4">
            <div className="col align-item-center" >
                 <div className="contact-cards card text-center border-primary mb-3" style={{maxWidth: '20rem'}}>
                    <div className="card-body">
                         <h5 className="card-title">Let's add a new contact!</h5>
                         <NewContactForm setContacts={setContacts} allContacts={allContacts}/>
                      
                    </div>
                 </div>
                 </div>
                  {allContacts.map(contact=><ContactCard key={contact.id} contact={contact} setContacts={setContacts} allContacts={allContacts}/>)}
                </div>
           
            </div>
         </div>
        );

}

export default ContactsPage;