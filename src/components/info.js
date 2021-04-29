import React from 'react';
import './info.css';
import {Card} from 'react-bootstrap';


function Infobox() {
    return(
        <div className="info-container">
            <Card className="Card">
                <Card.Body ClassName="Card Card-Body">
                    <Card.Title card card-title>Information</Card.Title>
                    <Card.Text>
                    Over the last decade Crowdfunding has become a key financing channel for entrepreneurs, artists and social projects. 
                    subscription based crowdfunding platforms such as Patreon turn the single interaction between creator and crowd into an ongoing relationship.
                    The goal of this Survey is to investigate what drives the crowd wether to keep or stop subscribing to creators.
                    This survey is completely anonymous and will take about 7 mins.
                    For further questions feel free to contact me under following email address:
                    </Card.Text>
                    <Card.Text>s2198395@stud.uni-frankfurt.de</Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Infobox;