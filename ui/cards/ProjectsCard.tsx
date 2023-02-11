import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import Project from '../../components/other/Project';

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
                className="h-screen flex items-center justify-center"
            >
                <div className="relative w-full max-h-screen overflow-auto">
                    <div className="w-full flex flex-col items-center justify-center px-8 pb-8 sm:px-12 sm:pb-12 md:px-20 md:pb-20 lg:px-24 lg:pb-24 xl:p-24">
                        <div className="w-full h-16 flex xl:hidden flex-row items-center mb-8">
                            <div className="w-3 h-[2px] bg-gradient-to-r from-[#9197A000] to-[#9197A077] rounded mr-3" />
                            <p className="font-black align-bottom text-2xl text-yano-500 leading-none">PROJECTS</p>
                            <div className="grow h-[2px] bg-gradient-to-r from-[#9197A077] to-[#9197A000] rounded ml-3 mr-8" />
                        </div>
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
                                className="h-full"
                                name="Adah - Personal Protfolio"
                                description="Adah is a personal portfolio website built using modern web technologies such as TypeScript, Next.js, React, TailwindCSS, and Framer Motion. The project was created to showcase the developer's skills, projects, and experience in a visually appealing and user-friendly manner"
                                tasks={[
                                    "Designing and implementing the UI using TailwindCSS",
                                    "Setting up a Next.js framework for optimized performance",
                                    "Incorporating dynamic data using React and TypeScript",
                                    "Adding animation using Framer Motion"
                                ]}
                                technologies={["Typescript", "NextJs", "React", "TailwindCSS", "Framer Motion"]}
                                projectLink="https://github.com/ilyassber/adah"
                                webLink="https://github.com/ilyassber/adah"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-8"
                            animate={{
                                y: [20, 0],
                                opacity: ["0%", "0%", "100%"],
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
                                projectLink="https://github.com/ilyassber/adah"
                                webLink=""
                            />
                        </motion.div>
                        <motion.div
                            className=""
                            animate={{
                                y: [20, 0],
                                opacity: ["0%", "0%", "0%", "100%"],
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
                </div>
            </div>
        </div >
    );

    return content;
};

export default ProjectsCard;