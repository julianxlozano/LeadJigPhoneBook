import React, {useState} from "react";
import EditContactForm from "./EditContactForm";




const ContactCard = (props) =>{
    const [editing,setEditing] = useState(false)
    const {firstName,lastName} = props.contact


    const getDetails = () => {
        let deets = []
        let i = 0
        for (const deet in props.contact){
            deets.push(<li>{`${deet}: ${props.contact[deet]}`}</li>)
            i += 1
        }
        return deets
    } 

    if(editing){
        return(
            <div className="contact-cards card text-center border-primary mb-3" style={{maxWidth: '19.5rem'}}>
            <div className="card-body">
                 <h5 className="card-title">{`Editing ${firstName} ${lastName}`}</h5>
                                    <EditContactForm setContacts={props.setContacts} allContacts={props.allContacts} contact={props.contact}/>
                                </div>
                        </div>
         
        )
    }else{

        return(
            <div className="col align-item-center">
                    <div className="contact-cards card border-primary mb-3" style={{maxWidth: '20rem'}}>
                        <h4 className="card-header">"{`${firstName} ${lastName}`}"</h4>
                            <div className="card-body">
                                <ul>{getDetails()}</ul>
                            </div>
                            <div className= "btn-group">
                                <button onClick={()=>setEditing(true)}className="btn btn-primary" >
                                    Edit
                                </button>
                                <button className="btn btn-danger" >
                                    Delete
                                </button>
                            </div>
                    </div>
                
            </div>
        );
    }
    
   
}

export default ContactCard