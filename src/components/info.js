import React from 'react';
import './info.css';
import {Card} from 'react-bootstrap';
function Infobox() {
    return(
        <div className="info-container">
            <Card className="Card info-card">
                <Card.Body ClassName="Card Card-Body">
                    <Card.Title className="text-center"><h1>Information</h1></Card.Title>
                    <Card.Text><p>
                    Over the last decade Crowdfunding has become a key financing channel for entrepreneurs, artists and social projects. 
                    Subscription based crowdfunding platforms such as Patreon turn the single interaction between these creators and their crowd into an ongoing relationship.
                    The goal of this Survey is to investigate what drives people to support these creators.
                    This survey is completely anonymous and will take about 7-10 mins.</p>
                    For any further questions feel free to contact me under following email address:
                    </Card.Text>
                    <Card.Text>thesis@anonymized.org</Card.Text>
                </Card.Body>
                
            </Card>
            
        </div>

    )
}

export default Infobox;