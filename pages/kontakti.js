import React, { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axioswal({
    //         url: process.env.api_uri + process.env.sendmail,
    //         method: 'POST',
    //         data: {
    //             name: name,
    //             email: email,
    //             message: message
    //         },
    //     }).then((data) => {
    //         if (data.status === 'ok') {
    //         }
    //     }).catch((err) => {
    //         console.log("Api call unsucessfull", err);
    //     })
    // };

    return (
        <div className="box">
            <h1 className="title">Kontakti</h1>
            <p>
                Nëse keni ndonjë ankesë apo kërkesë në lidhje me uebsajtin, na dërgoni një mesazh në adresën <a
                    href="mailto:librariadigjitale@gmail.com">librariadigjitale@gmail.com</a> apo prej Twitter: <a href="https:/twitter.com/libradigjitale">Libraria Digjitale</a>.
            </p>
            {/* <div variants={contentVariants} className="row">
                <div className="form-box col-md-12">
                    {/* <form method="POST" action="/contact" className="form-box">
                        <div className="group">
                            <input type="text" value={name}
                                onChange={e => setName(e.target.value)} className="input-default" required />
                            <label>Emri & Mbiemri</label>
                        </div>
                        <div className="group">
                            <input type="email" value={email}
                                onChange={e => setEmail(e.target.value)} className="input-default" required />
                            <label>Email</label>
                        </div>
                        <div className="group">
                            <textarea value={message} rows="4"
                                onChange={e => setMessage(e.target.value)} className="input-default" required></textarea>
                            <label>Mesazhi</label>
                        </div>
                        <div className="group">
                            <button type="submit" className="btn-main" >
                                Dërgo <span class="far fa-paper-plane"></span>
                            </button>
                        </div>
                    </form> 
                </div>
            </div> */}

        </div>
    );
}

export default Contact;