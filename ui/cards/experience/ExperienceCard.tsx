import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';
import Experience from '../../../components/other/Experience';

type ExperienceCardProps = {
    className: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {

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
                animate={animation}
                transition={transition}
            >
                <Experience
                    className=""
                    position="Software developer"
                    company="UM6P - AGE"
                    startDate="Jul 2021"
                    endDate="Present"
                    location="Bin Jareer"
                    description="AgriEdge is a business unit at UM6P that operates in the agriculture field and provides services to farmers based on data."
                    tasks={[
                        "Creating a cartographic web application for yield prediction based on data provided by users and satellite plus harvest management",
                        "Creating a cartographic web application to visualize different data layers using a tiling system",
                        "Developing backend services logic and managing databases",
                        "Developing REST APIs and GraphQL APIs",
                        "Ensuring access permissions and security"
                    ]}
                />
            </motion.div >
        </div >
    );

    return content;
};

export default ExperienceCard;