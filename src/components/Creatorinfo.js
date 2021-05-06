import React from 'react';
import {Card} from 'react-bootstrap';
import './Creatorinfo.css';

function Creatorinfo() {
    return(
        <div className='Creatorinfo-container'>
            <Card className="Card Creator-info">
                <Card.Body ClassName="Card Creator-info Card-Body">
                    <Card.Title className="text-center"><h1>Guiseppe from Brooklyn</h1></Card.Title>
                    <Card.Text>
                        <p>
                            This mock profile belongs to Guiseppe. He is an New york based artist and has been painting for over 40 years. 
                            With the help of his nephew Micky he sat up an Crowd.ml account in order pay keep doing what he loves most. 
                            Become a part of this wonderful community of aspiring artists and art enthusiasts.
                        </p><br/>
                        <p>
                            You can become a subscriber and recieve a variety of rewards starting at only 10$ a month.
                        </p>

                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )


}

export default Creatorinfo;