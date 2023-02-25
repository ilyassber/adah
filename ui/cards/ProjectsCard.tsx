import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import ProjectCard from '../../components/other/ProjectCard';
import { GlobalContext } from '../../components/context/Context';

type ProjectsCardProps = {
    className: string;
};

const ProjectsCard: React.FC<ProjectsCardProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const [animation, setAnimation] = React.useState<string>("initAnimation");

    const variants = {
        initAnimation: {
            y: [20, 0],
            opacity: ["0%", "100%"],
        },
        exitAnimation: {
            y: [0, -10],
            opacity: ["100%", "0%"],
        },
    }

    React.useEffect(() => {
        if (params.nextSectionId != params.selectedSectionId) {
            setAnimation("exitAnimation");
        }
    }, [params.nextSectionId]);

    let content = (
        <div className={props.className}>
            <motion.div
                className="w-full flex flex-col items-center justify-center px-8 pb-8 sm:px-12 sm:pb-12 md:px-20 md:pb-20 lg:px-24 lg:pb-24 xl:p-24"
                variants={variants}
                animate={animation}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                onAnimationComplete={(animation: string) => {
                    if (animation == "exitAnimation") {
                        dispatchParams({ key: "selectedSectionId", value: params.nextSectionId });
                    }
                }}
            >
                <motion.div
                    className="w-full h-16 flex xl:hidden flex-row items-center mb-8"
                    animate={{
                        y: [20, 0],
                        opacity: ["0%", "100%"],
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                >
                    <div className="w-3 h-[2px] bg-gradient-to-r from-[#9197A000] to-[#9197A077] rounded mr-3" />
                    <p className="font-bold align-bottom text-xl text-[#9197A0] leading-none">PROJECTS</p>
                    <div className="grow h-[2px] bg-gradient-to-r from-[#9197A077] to-[#9197A000] rounded ml-3 mr-8" />
                </motion.div>
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
                    <ProjectCard
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
                    <ProjectCard
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
                    <ProjectCard
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
            </motion.div>
        </div >
    );

    return content;
};

export default ProjectsCard;