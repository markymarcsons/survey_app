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
                            This mock profile belongs to Guiseppe. He is an New york based artit and has been painting for over 40 years. 
                            Together with his nephew Micky he sat up an Crowd account in order to keep producing art. 
                            Become a part of this wonderful community of aspriring artist and art enthusiasts and recieve a variaty of rewards.
                        </p><br/>
                        <p>
                            You can become a subscriber of Guiseppe starting at only 1$ a month.
                        </p>

                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )


}

export default Creatorinfo;