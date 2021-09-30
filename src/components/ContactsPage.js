import React, { useState,useEffect } from 'react';
import ContactCard from './ContactCard';
import NewContactForm from './NewContactForm';

const ContactsPage = () =>{
    const [allContacts,setContacts] = useState([])
   

    useEffect(()=>{
 
    },[])

        return (
            <div className="all-contact-cards container col d-flex justify-content-center">
            <div className="card-rows row row-cols-1 row-cols-md-3 g-4">
            <div className="col align-item-center" >
                 <div className="contact-cards card text-center border-primary mb-3" style={{maxWidth: '19.5rem'}}>
                    <div className="card-body">
                         <h5 className="card-title">Let's add a new contact!</h5>
                         <NewContactForm setContacts={setContacts} allContacts={allContacts}/>
                      
                    </div>
                 </div>
                 </div>
                  {allContacts.map(contact=><ContactCard contact={contact} setContacts={setContacts} allContacts={allContacts}/>)}
                </div>
           
         </div>
        );

}

export default ContactsPage;