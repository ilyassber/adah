import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';
import Project from '../../../components/other/Project';

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
            <div
                className="relative w-full h-screen flex flex-col overflow-y-auto p-24"
            >
                <motion.div
                    className="mb-8"
                    animate={{
                        y: [20, 0],
                        opacity: ["0%", "100%"],
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                >
                    <Project
                        className=""
                        name="Adah - Personal Protfolio"
                        description="Adah is a personal portfolio website built using modern web technologies such as TypeScript, Next.js, React, TailwindCSS, and Framer Motion. The project was created to showcase the developer's skills, projects, and experience in a visually appealing and user-friendly manner"
                        tasks={[
                            "Designing and implementing the UI using TailwindCSS",
                            "Setting up a Next.js framework for optimized performance",
                            "Incorporating dynamic data using React and TypeScript",
                            "Adding animation using Framer Motion"
                        ]}
                        technologies={["Typescript", "NextJs", "React", "TailwindCSS", "Framer Motion"]}
                        projectLink=""
                        webLink=""
                    />
                </motion.div>
                <motion.div
                    className="mb-8"
                    animate={{
                        y: [20, 0],
                        opacity: ["0%", "100%"],
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "linear",
                    }}
                >
                    <Project
                        className=""
                        name="Adah - Personal Protfolio"
                        description="Adah is a personal portfolio website built using modern web technologies such as TypeScript, Next.js, React, TailwindCSS, and Framer Motion. The project was created to showcase the developer's skills, projects, and experience in a visually appealing and user-friendly manner"
                        tasks={[
                            "Designing and implementing the UI using TailwindCSS",
                            "Setting up a Next.js framework for optimized performance",
                            "Incorporating dynamic data using React and TypeScript",
                            "Adding animation using Framer Motion"
                        ]}
                        technologies={["Typescript", "NextJs", "React", "TailwindCSS", "Framer Motion"]}
                        projectLink=""
                        webLink=""
                    />
                </motion.div>
                <motion.div
                    className=""
                    animate={{
                        y: [20, 0],
                        opacity: ["0%", "100%"],
                    }}
                    transition={{
                        duration: 0.9,
                        ease: "linear",
                    }}
                >
                    <Project
                        className=""
                        name="Adah - Personal Protfolio"
                        description="Adah is a personal portfolio website built using modern web technologies such as TypeScript, Next.js, React, TailwindCSS, and Framer Motion. The project was created to showcase the developer's skills, projects, and experience in a visually appealing and user-friendly manner"
                        tasks={[
                            "Designing and implementing the UI using TailwindCSS",
                            "Setting up a Next.js framework for optimized performance",
                            "Incorporating dynamic data using React and TypeScript",
                            "Adding animation using Framer Motion"
                        ]}
                        technologies={["Typescript", "NextJs", "React", "TailwindCSS", "Framer Motion"]}
                        projectLink=""
                        webLink=""
                    />
                </motion.div>
            </div>
        </div >
    );

    return content;
};

export default ProjectsCard;