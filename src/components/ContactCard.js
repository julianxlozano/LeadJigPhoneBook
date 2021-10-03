import React, {useState} from "react";
import EditContactForm from "./EditContactForm";
import EditHistory from "./EditHistory";




const ContactCard = (props) =>{
    const [editing,setEditing] = useState(false)
    const [viewingHistory,setViewHistory] = useState(false)
    const {firstName,lastName} = props.contact

    

    const getDetails = () => {
        let deets = []
        let keyNum = 0
        for (const deet in props.contact){
            if (deet === 'id' || deet === 'editHistory') continue;
            let newString = deet.replace(/([A-Z])/g, ' $1');
            let formattedDeet = newString.charAt(0).toUpperCase() + newString.slice(1);

            deets.push(<tr><th scope="row">{formattedDeet}</th><td>{props.contact[deet]}</td></tr>)
            keyNum += 1
        }
        return deets
    } 

    if(editing){
        return(
            <div className="col align-item-center">
                  <div className="contact-cards card text-center border-primary mb-3" style={{maxWidth: '20rem'}}>
                        <div className="card-body">
                                    <h5 className="card-title">{`Editing ${firstName} ${lastName}`}</h5>
                                    <EditContactForm setContacts={props.setContacts} allContacts={props.allContacts} contact={props.contact} setEditing={setEditing}/>
                        </div>
                  </div>
            </div>
         
        )
 
    }else{

        return(
            <>
            {viewingHistory ? <EditHistory setViewHistory={setViewHistory} editHistory={props.contact.editHistory}/> : null}
            <div className="col align-item-center">
                    <div className="contact-cards card border-primary mb-3" style={{maxWidth: '20rem'}}>
                        <h4 className="card-header">"{`${firstName} ${lastName}`}"</h4>
                            <div className="card-body">
                                <table class="table">
                                    <tbody>
                                    {getDetails()}
                                    </tbody>
                                </table>
                            </div>
                            <div className= "btn-group">
                                <button onClick={()=>setEditing(true)}className="btn btn-primary" >
                                    Edit
                                </button>
                                <button onClick={()=>setViewHistory(true)} className="btn btn-danger" >
                                    View History
                                </button>
                            </div>
                    </div>
                
            </div>
            </>
        );
    }
    
   
}

export default ContactCard