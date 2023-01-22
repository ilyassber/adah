import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';

type ExperienceCardProps = {
    className: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {

    let content = (
        <div className={props.className}>
            <motion.div
                className="h-screen flex flex-col items-center"
            >
            </motion.div >
        </div >
    );

    return content;
};

export default ExperienceCard;