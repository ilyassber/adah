import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';
import Experience from '../../../components/other/Experience';

type ProjectsCardProps = {
    className: string;
};

const ProjectsCard: React.FC<ProjectsCardProps> = (props) => {

    const animation = {
        y: [20, 0],
        opacity: ["0%", "100%"],
    };

    const transition = {
        duration: 0.6,
        ease: "easeOut",
    };

    let content = (
        <div className={props.className}>
            <motion.div
                className="h-screen flex flex-col items-center justify-center"
            >
                <div className="h-full flex flex-col items-center overflow-auto py-24">
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default ProjectsCard;