import React from "react";

import {Navbar, Nav} from 'react-bootstrap';


 const MyNav = (props) =>{

    return(
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="/">
                <img src={'/Leadjig.png'} style={{width:222, marginTop: -7}} alt="The Leaders in Jig"/>
                </Navbar.Brand>
            </Navbar> 
          )
}



export default MyNav