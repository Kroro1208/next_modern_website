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
            {/* // FadeInタグで囲まれている部分の要素<h1></h1>など */}
            {props.children}
        </motion.div>
    )
}

export default FadeIn

export const FadeInStagger = ({ faster = false, ...props }) => {
    return (
        <FadeInStaggerContext.Provider
            value={true}
        >
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    );
}