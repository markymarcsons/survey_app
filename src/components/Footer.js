import React from 'react';
// import {Footer} from 'react-bootstrap';
import './Footer.css';

function FooterComp() {
    return(
        <footer className="Footer">
            <div className="text-center p-3">
            © 2021 Copyright
                {/* <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
            </div>
        </footer>
    )
}

export default FooterComp;