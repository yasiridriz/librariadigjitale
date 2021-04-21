import React, { useState } from 'react';
import { motion } from 'framer-motion';

const titleVariants = {
    initial: { scale: 1.07, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: .5, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: .035 } },
    exit: {
        x: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: .02 }
    }
};
const contentVariants = {
    initial: { scale: 1, y: 60, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
        x: 0,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    },
}


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
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">
            <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">Kontakti</motion.h1>
            <motion.p variants={contentVariants}>
                Nëse keni ndonjë ankesë apo kërkesë në lidhje me uebsajtin, na dërgoni një mesazh në adresën <a
                    href="mailto:feedback@librariadigjitale.gq">feedback@librariadigjitale.co</a>, apo dërgoni prej formularit në vijim:
                    </motion.p>
            <motion.div variants={contentVariants} className="row">
                <div className="form-box col-md-12">
                    <form method="POST" action="/contact" className="form-box">
                        <div className="group">
                            <input type="text" value={name}
                                onChange={e => setName(e.target.value)} className="input-default" required />
                            <label>Emri & Mbiemri</label>
                        </div>
                        <div className="group">
                            <input type="email" value={email}
                                onChange={e => setEmail(e.target.value)} className="input-default" required />
                            <label>Email Adresa</label>
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
                {/* <div className="col-md-6">
                    <p>Find me on social media:</p>
                    <br/>
                    <br/>
                    <a href="https://www.facebook.com/jasir.idriz" target="_blank" className="btn-second facebook"><span className="fab fa-facebook"></span> Yasir</a><br/><br/>
                    <a href="https://www.instagram.com/yasiridriz" target="_blank" className="btn-second instagram"><span className="fab fa-instagram"></span> @yasiridriz</a><br/><br/>
                    <a href="https://www.facebook.com/jasir.idriz" target="_blank" className="btn-second linkedin"><span className="fab fa-linkedin"></span> Yasir</a>
                    <a></a>
                    <a></a>
                </div> */}
            </motion.div>

        </motion.div>
    );
}

export default Contact;