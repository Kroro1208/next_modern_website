import React from 'react'
import { motion } from "framer-motion"
import { createContext, useContext } from 'react';

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: '0px 0px -200px' }

function FadeIn(props) {
    const isInstaggerGroup = useContext(FadeInStaggerContext);
    const motionProps = isInstaggerGroup ? {} : { initial: 'hidden', whileInView: 'visible', viewport };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1.0 }}
            {...motionProps}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeIn