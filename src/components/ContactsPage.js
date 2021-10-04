import React, { useState,useEffect } from 'react';
import ContactCard from './ContactCard';
import NewContactForm from './NewContactForm';


const ContactsPage = () =>{
    const [allContacts,setContacts] = useState([])
    const [searchTerm,setSearchTerm] = useState("")
    const [searchCategory,setSearchCategory] = useState("")
 


    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
      }

      //this sets initial seed data to play with
    useEffect(()=>{
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        const jewels =   { 
                id: uuid(),
                firstName: 'Julian',
                lastName: 'Lozano',
                phoneNumber: '630-917-0690',
                editHistory:[{id:uuid(),timeOfEdit:dateTime,content:{}}]
            }
        const jerm = { id: uuid(),
                firstName: 'Jeremy',
                lastName: 'Emanuel',
                phoneNumber: '333 33333',
                editHistory:[{id:uuid(),timeOfEdit:dateTime,content:{}}]}
        const mari = { id: uuid(),
                firstName: 'Marilyn',
                lastName: 'Reles',
                phoneNumber: '999 99999999',
                editHistory:[{id:uuid(),timeOfEdit:dateTime,content:{}}]}
        const frank = { id: uuid(),
                firstName: 'Frank',
                lastName: 'Javier',
                phoneNumber: '444 44444',
                editHistory:[{id:uuid(),timeOfEdit:dateTime,content:{}}]}
        const clem = {id: uuid(),
                    firstName: 'Clemmie',
                    lastName: 'Michelle',
                    phoneNumber: '555 555 55555',
                    editHistory:[{id:uuid(),timeOfEdit:dateTime,content:{}}]}

            clem['editHistory']['content'] = clem
            jewels['editHistory']['content'] = jewels
            mari['editHistory']['content'] = mari
            frank['editHistory']['content'] = frank
            jerm['editHistory']['content'] = jerm
            console.log(jerm)
        setContacts([...allContacts,jewels,jerm,mari,frank,clem])

        
    },[])

   
        return (
            <div className="container">
                <form className="search-bar col d-flex justify-content-center">
                    <div class="form-group">
                    </div>
                        <div class="form-group search-bar">
                        <input onChange={e=> setSearchTerm(e.target.value)} type="text" className="form-control" id="search-term-input" placeholder="search here"></input>
                        </div>
                        <div class="form-group search-bar">
                        <select onChange={e=>setSearchCategory(e.target.value)} class="form-select" aria-label="Default select example" id="select-box">
                            <option selected>Search By...</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="phoneNumber">Phone Number</option>
                            </select>
                            </div>
                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary mb-2">Search</button>
                            <button type="submit" class="btn btn-primary mb-2">Reset</button>
                        </div>
                    </form>

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
                    {searchCategory === "" ? allContacts.map(contact=><ContactCard key={contact.id} contact={contact} setContacts={setContacts} allContacts={allContacts}/>)
                    :allContacts.filter(contact=>contact[searchCategory].toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(contact=><ContactCard key={contact.id} contact={contact} setContacts={setContacts} allContacts={allContacts}/>)
                    }
                </div>
           
            </div>
         </div>
        );

}

export default ContactsPage;