import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const EditHistory = (props) => {

    
//debugger



    const getDetails = () => {
        let deets = []
        let keyNum = 0

        props.editHistory.forEach(histObj=>{
            for (const deet in histObj ){
                if (deet === 'id' || deet === 'editHistory') continue;
                    if(deet === 'content'){
                        for (const field in histObj.content ){
                            if (field === 'id' || field === 'editHistory') continue;
                            deets.push(<li key={keyNum}>{`${field}: ${histObj.content[field]}`}</li>)
                            keyNum += 1
                        }
                    }else{
                        deets.push(<li key={keyNum}>{`${deet}: ${histObj[deet]}`}</li>)
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
                <ul>
                {getDetails()}
                </ul>

            </Modal.Body>

        <Modal.Footer>

        </Modal.Footer>

      </Modal>
    );
  };

export default EditHistory;