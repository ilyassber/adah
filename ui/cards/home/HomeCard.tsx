import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

type HomeCardProps = {
    className: string;
};

const HomeCard: React.FC<HomeCardProps> = (props) => {
    let content = (
        <div className={props.className}>
            <motion.div
                className=""
                animate={{
                    x: [0, 0],
                    opacity: ["0%", "100%"],
                }}
                transition={{
                    duration: 0.6,
                }}
            >
                <p className="font-semibold text-xl text-[#D19E18] mb-8">
                    Hi, I'm
                </p>
                <p className="font-montserrat font-bold text-5xl text-[#E2E8F0] mb-8">
                    Ilyass BERCHIDA
                </p>
                <p className="font-bold text-5xl text-[#9197A0] leading-normal mb-8">
                    I build things & ensure<br />functionality.
                </p>
                <p className="font-normal text-lg text-[#9197A0] leading-normal">
                    I'm a <span className="font-semibold text-[#D19E18]">Software developer</span> specialized in creating digital<br />experiences mainly for the web. Currently focusing on building<br />digital tools that enhance agriculture at <span className="font-semibold text-[#D19E18]">AgriEdge</span>.
                </p>
            </motion.div>
        </div>
    );

    return content;
};

export default HomeCard;