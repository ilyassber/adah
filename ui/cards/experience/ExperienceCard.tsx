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
                <div className="flex flex-col items-center overflow-auto py-24">
                    <Experience
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
                    <Experience
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
                    <Experience
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
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default ExperienceCard;