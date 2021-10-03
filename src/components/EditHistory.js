import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const EditHistory = (props) => {

    const getDetails = () => {
        let deets = []
        let keyNum = 0

        props.editHistory.forEach(histObj=>{
            for (const deet in histObj ){
                if (deet === 'id' || deet === 'editHistory') continue;
                    if(deet === 'content'){
                        for (const field in histObj.content ){
                            if (field === 'id' || field === 'editHistory') continue;
                            let newString = field.replace(/([A-Z])/g, ' $1');
                            let formattedField = newString.charAt(0).toUpperCase() + newString.slice(1);
                            deets.push(<tr><th scope="row">{formattedField}</th><td>{histObj.content[field]}</td></tr>)
                           
                            keyNum += 1
                        }
                    }else{
                        let newString = deet.replace(/([A-Z])/g, ' $1');
                        let formattedDeet = newString.charAt(0).toUpperCase() + newString.slice(1);
                        deets.push(<tr><th scope="row">{formattedDeet}</th><td>{histObj[deet]}</td></tr>)
                        keyNum += 1
                }
            }
          }
        )
        return deets
    } 

    return (
      <Modal show={true}>
        <Modal.Header>Edit History</Modal.Header>
            <Modal.Body>
            <table class="table">
               <tbody>
                     {getDetails()}
                </tbody>
            </table>

            </Modal.Body>

        <Modal.Footer>
            <button onClick={()=>props.setViewHistory(false)} className="btn btn-primary">Done</button>
        </Modal.Footer>

      </Modal>
    );
  };

export default EditHistory;