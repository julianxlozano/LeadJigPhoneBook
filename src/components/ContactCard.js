import React, {useState} from "react";




const ContactCard = (props) =>{
 
    const {firstName,Lastname} = props

    const getDetails = () => {
        let deets = []
        let i = 0
        for (const deet in props){
            deets.push(<li>{`${deet}: ${props[deet]}`}</li>)
            i += 1
        }
        return deets
    } 

    return(
        <div className="col align-item-center">
                  <div className="contact-cards card border-primary mb-3" style={{maxWidth: '20rem'}}>
                      <h4 className="card-header">"{firstName + Lastname}"</h4>
                          <div className="card-body">
                            <ul>{getDetails()}</ul>
                          </div>
                          <div className= "btn-group">
                              <button className="btn btn-outline-danger" >
                                  Delete
                              </button>
                          </div>
                  </div>
             
        </div>
    
    );
}

export default ContactCard