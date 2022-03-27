import { motion } from 'framer-motion';
import { container, content } from '../../lib/motion/variants';
import clientPromise from "../../lib/mongodb"; // mongo client

import Link from 'next/link';

const OpEd = ({ data }) => {
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={container}>
            <h1 className="bigtitle"><span>Opinion dhe Editorial</span></h1>

            <div className="row paper">
                {data.map(paper => (
                    <Link href='/op-ed/[slug]' as={`/op-ed/${paper.title}`} passHref>
                        <motion.div variants={content} className="box" style={{ cursor: 'pointer' }}>
                            <a>
                                <h2>
                                    {paper.title}
                                </h2>
                            </a>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
export async function getStaticProps() {
    const client = await clientPromise;

    var db = client.db();

    const data = await db
        .collection("papers")
        .find({})
        .sort({ $natural: -1 })
        .toArray();

    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
        },
        revalidate: 60 * 60 * 12
    };
}

export default OpEd;