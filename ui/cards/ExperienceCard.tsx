import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import UltraExp from '../../components/other/UltraExp';
import { GlobalContext } from '../../components/context/Context';
import { useTranslation, Trans } from 'next-i18next';
import { Experience } from '../../types.d';

type ExperienceCardProps = {
    className: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);
    const { t } = useTranslation('common');

    const [experiences, setExperiences] = React.useState<Experience[]>([]);
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
        setExperiences(t("experience.experiences", { returnObjects: true }));
    }, []);

    React.useEffect(() => {
        if (params.nextSectionId != params.selectedSectionId) {
            setAnimation("exitAnimation");
        }
    }, [params.nextSectionId]);

    let content = (
        <div className={props.className}>
            <motion.div
                className="w-full flex items-start justify-center"
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
                <div className="w-full relative flex flex-col justify-center border-l-2 border-dashed border-[#9197A000] px-8 pb-8 sm:px-12 sm:pb-12 md:px-20 md:pb-20 lg:px-24 lg:pb-24 xl:p-24">
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
                        <p className="font-bold align-bottom text-xl text-[#9197A0] leading-none">EXPERIENCE</p>
                        <div className="grow h-[2px] bg-gradient-to-r from-[#9197A077] to-[#9197A000] rounded ml-3 mr-8" />
                    </motion.div>
                    {experiences && experiences.length > 0 ? experiences.map((experience: Experience, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                className="mb-8"
                                animate={{
                                    y: [20, 0],
                                    opacity: [...[...Array(index + 1).keys()].map(() => { return "0%" }), "100%"],
                                }}
                                transition={{
                                    duration: 0.3 * (index + 1),
                                    ease: "linear",
                                }}
                            >
                                <UltraExp
                                    className=""
                                    position={experience.title}
                                    company={experience.company}
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    location={experience.location}
                                    description={experience.description}
                                    tasks={experience.tasks}
                                />
                            </motion.div>
                        );
                    }) : null}
                </div>
            </motion.div>
        </div >
    );

    return content;
};

export default ExperienceCard;