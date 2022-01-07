import React from 'react';

import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';

const Contact = () => {
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={container} className="box">
            <h1 className="title">Kontakti</h1>
            <p>
                Nëse keni ndonjë ankesë apo kërkesë në lidhje me uebsajtin, na dërgoni një mesazh në adresën <a
                    href="mailto:librariadigjitale@gmail.com">librariadigjitale@gmail.com</a> apo prej Twitter: <a href="https:/twitter.com/libradigjitale">Libraria Digjitale</a>.
            </p>
            {/* 
                <div className="group">
                    <input type="text" value={name} onChange={e => setName(e.target.value)}
                        className="input-default" required />
                    <label>Emri & Mbiemri</label>
                </div> 
            */}

        </motion.div>
    );
}

export default Contact;