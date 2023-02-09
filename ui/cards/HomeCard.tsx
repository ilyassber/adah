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
                className="p-8 sm:p-12 md:p-20 lg:p-24"
                animate={{
                    y: [-20, 0],
                    opacity: ["0%", "100%"],
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
            >
                <p className="font-semibold text-base sm:text-lg md:text-xl text-yano-500 mb-2 sm:mb-4 md:mb-6 lg:mb-8">
                    Hi, I'm
                </p>
                <p className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#E2E8F0] mb-2 sm:mb-4 md:mb-6 lg:mb-8">
                    Ilyass BERCHIDA
                </p>
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9197A0] leading-normal mb-2 sm:mb-4 md:mb-6 lg:mb-8">
                    I build things & ensure<br />functionality.
                </p>
                <p className="max-w-lg font-normal text-xs sm:text-sm md:text-base text-[#9197A0] leading-relaxed">
                    I'm a <span className="font-semibold text-yano-500">Software developer</span> specialized in creating digital experiences mainly for the web. Currently focusing on building digital tools that enhance agriculture at <span className="font-semibold text-yano-500">AgriEdge</span>.
                </p>
            </motion.div>
        </div>
    );

    return content;
};

export default HomeCard;