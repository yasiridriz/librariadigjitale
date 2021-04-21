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

const Books = () => {
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="container">
            <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Librat</span></motion.h1>

            <motion.div variants={contentVariants} className="box latestbooks">
                <h1 className="title"> Librat e Fundit: </h1>
                <p style={{ textAlign: "right" }}><a href="/books"> Shih të gjitha <span className="shift">&rarr;</span></a></p>
                
            </motion.div>
        </motion.div>
    )
}

export default Books;