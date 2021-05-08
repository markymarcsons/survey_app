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
                            This mock profile belongs to Guiseppe. He is a New york based artist and has been painting for over 40 years. 
                            With the help of his nephew Micky he sat up a Crowd account in order to get paid doing what he loves most. 
                            Become a part of this wonderful community of aspiring artists and art enthusiasts.
                        </p><br/>
                        <p>
                            Starting at only 1$ a month you can become a subscriber and receive a variety of rewards .
                        </p>

                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )


}

export default Creatorinfo;