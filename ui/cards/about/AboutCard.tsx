import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';

type AboutCardProps = {
    className: string;
};

const AboutCard: React.FC<AboutCardProps> = (props) => {
    let content = (
        <div className={props.className}>
            <motion.div
                className="flex flex-col items-center"
                animate={{
                    y: [-20, 0],
                    opacity: ["0%", "100%"],
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
            >
                <Icon className="rounded-full bg-[#E2E8F0] overflow-hidden mb-8" src="/images/ilyass.png" alt="" dim="150" />
                <p className="font-semibold text-2xl text-[#E2E8F0] mb-8">
                    Ilyass Berchida
                </p>
            </motion.div>
        </div>
    );

    return content;
};

export default AboutCard;