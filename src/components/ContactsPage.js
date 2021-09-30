import React, { useState,useEffect } from 'react';
import ContactCard from './ContactCard';

const ContactsPage = () =>{
    const [allContacts,setContacts] = useState([])
    const testGuy = {
        firstname: "Joe",
        lastname: "Shmoe",
        phonenumber: "630-999-9999",
        happy: "yes"
    }

    const testGuy2 = {
        firstname: "Joe",
        lastname: "Doe",
        phonenumber: "630-999-9999",
        happy: "no"
    }

    useEffect(()=>{
        setContacts([testGuy,testGuy2])
    },[])

        return (
            <div className="all-song-cards container col d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col align-item-center" >
                 <div className="song-cards card text-center border-primary mb-3" style={{maxWidth: '19.5rem'}}>
                    <div className="card-body">
                         <h5 className="card-title">Let's add a new contact!</h5>
                         <div className= "btn-group">
                             <button className="btn btn-outline-success" >Submit</button>
                         </div>
                    </div>
                 </div>
                 </div>
                  {allContacts.map(contact=><ContactCard {...contact}/>)}
                </div>
           
         </div>
        );

}

export default ContactsPage;