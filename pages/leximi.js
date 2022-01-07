import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';

const Leximi = () => {
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={container}  className="box">
            <h1 className="title">Si të lexoj?</h1>
            <div className="row justify-content-between">
                <motion.div variants={content} className="col-md-6">
                    <h2>
                        Windows dhe Mac kompjuterët
                    </h2>
                    <p>
                        Formati <b><u>PDF</u></b> është më eleganti për lexim në ekrane të mëdha.
                    </p>
                    <p>
                        <b><u>EPUB</u></b> është format që mundëson ndryshimin e madhësisë, fontit dhe ngjyrës së tekstit për lexim më të përshtatshëm.
                        Programe të njohura për lexim të librave EPUB janë:
                    </p>
                    <ul list-style="none" style={{ fontSize: "1.1rem" }}>
                        <li style={{ marginBottom: "1em" }}>
                            <a href="https://www.adobe.com/solutions/ebook/digital-editions/download.html" target="_blank">Adobe Digital Editions (Windows & Mac)</a>
                        </li>
                        <li>

                            <a href="https://www.apple.com/apple-books/" target="_blank">Apple Books (Mac)</a>
                        </li>
                    </ul>
                </motion.div>
                <motion.div variants={content} className="col-md-6">
                    <h2>
                        iOS dhe Android
                    </h2>
                    <p>
                        <b><u>EPUB</u></b> është formati më i përshtatshëm për lexim në mobil.
                        Aplikacione më të njohura për pajisjet me iOS dhe Android:
                    </p>
                    <ul list-style="none" style={{ fontSize: "1.1rem" }}>
                        <li style={{ marginBottom: "1em" }}>
                            <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.books&hl=en&gl=US" target="_blank">Google Play Books (Android)</a>
                        </li>
                        <li>
                            <a href="https://apps.apple.com/us/app/apple-books/id364709193" target="_blank">Apple Books (iOS)</a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Leximi;