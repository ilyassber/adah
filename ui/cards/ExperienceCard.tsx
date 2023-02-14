import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import Experience from '../../components/other/Experience';
import UltraExp from '../../components/other/UltraExp';
import { GlobalContext } from '../../components/context/Context';

type ExperienceCardProps = {
    className: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {

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
                className="h-screen flex items-center justify-center"
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
                <div className="relative w-full max-h-screen overflow-auto">
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
                            <UltraExp
                                className=""
                                position="Software developer"
                                company="UM6P - AGE"
                                startDate="Jul 2021"
                                endDate="Present"
                                location="Bin Jareer, Morocco"
                                description="AgriEdge is a business unit at UM6P that operates in the agriculture field and provides services to farmers based on data."
                                tasks={[
                                    "Creating a cartographic web application for yield prediction based on data provided by users and satellite plus harvest management",
                                    "Creating a cartographic web application to visualize different data layers using a tiling system",
                                    "Developing backend services logic and managing databases",
                                    "Developing REST APIs and GraphQL APIs",
                                    "Ensuring access permissions and security"
                                ]}
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
                            <UltraExp
                                className=""
                                position="Back-end Developer - Internship"
                                company="ECOM ANALYTIC"
                                startDate="Nov 2020"
                                endDate="Apr 2021"
                                location="Khouribga, Morocco"
                                description="1337 Startup provides ecommerce solutions."
                                tasks={[
                                    "Creating a web crawler for e-commerce websites and a data scraper to collect data about products in different categories",
                                    "Creating a database to store collected data",
                                    "Developing a background process that keep track on scraped product and categories, and manage scraping schedule for each item",
                                    "Developing a separated crawling and scraping as decentralized services on many servers to facilitate scaling",
                                    "Creating a REST API to link between all services"
                                ]}
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
                            <UltraExp
                                className=""
                                position="Flutter Developer"
                                company="ETIL"
                                startDate="Jul 2019"
                                endDate="Jan 2020"
                                location="Essaouira, Morocco"
                                description="Essaouira Territorial Innovation Lab (ETIL), an open innovation space serving the territorial developement of the Essaouira province."
                                tasks={[
                                    "Creating a digital guide as a mobile application to provide city visitors with the information about the sities they visit and their monuments, history, and culture",
                                ]}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default ExperienceCard;