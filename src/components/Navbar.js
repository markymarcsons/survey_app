import React from 'react';
import "../App.css";
import { Navbar} from 'react-bootstrap';
import "./Navbar.css"



function Navigation() {
    return(
        <> 
            <Navbar className="navbar" bg="dark" variant="dark">
                <div className="navbar-container">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="chip.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    CROWD
                    </Navbar.Brand>
                </div>
            </Navbar>
            
        </>
    )
}
export default Navigation;