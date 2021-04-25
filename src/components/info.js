import React from 'react';
import './info.css';
import {Card} from 'react-bootstrap';


function Infobox() {
    return(
        <div className="info-container">
            <Card className="Card">
                <Card.Body ClassName="Card Card-Body">
                    <Card.Title card card-title>Information</Card.Title>
                    <Card.Text>All the information you need</Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Infobox;