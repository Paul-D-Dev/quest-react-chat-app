import React from 'react';
import './style/Contact.css';

const name = {
    firstName: 'Leona',
    lastName: 'Garret'
}
const avatar = "https://randomuser.me/api/portraits/women/29.jpg";
const status = true;

function Contact() {
    return (
        <div className="Contact">
            <img src={avatar} alt="avatar" className="avatar"/>
            <div className="info">
                <p className="name">{name.firstName + ' ' + name.lastName}</p>
                <div className="status">
                    {status ? 
                        <div>
                            <div className="status-online"></div>
                            <p className="status-text">online</p>
                        </div>
                        :
                        <div>
                            <div className="status-offline"></div>
                            <p className="status-text">offline</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;